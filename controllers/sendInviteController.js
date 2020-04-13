const userModel = require('./../models/userModel');
const User = require('./../models/usersModel');
const utils = require('./../utils/sendEmail');

module.exports = {
    async generateLink(req, res) {
        const {id} = req.body;

        if (!id) {
            return res.status(401).json({err: 'Invalid email!'});
        }
        const email = await User.find({_id: id});

        const token = await userModel.createAccessJWT(email[0].email);

        res.status(201).json({token: `http://localhost:3000/user-register/?=${token}`});
    },
    async sendInvite(req, res) {
        const {id, link} = req.body;

        if (!id || !link) {
            return res.status(401).json({message: `invite was not sent`});
        }
        const email = await User.find({_id: id});

        await utils.sendEmail(email[0].email, link);
        await User.findOneAndUpdate({email: email[0].email}, {invited: true});

        res.status(201).json({message: 'Invite was sent!'});
    },
};
