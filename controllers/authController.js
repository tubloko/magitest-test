const jwtDecode = require('jwt-decode');
const securityManager = require('./../utils/securityManager');
const userModel = require('./../models/userModel');
const User = require('./../models/usersModel');
const Test = require('./../models/testModel');

module.exports = {
    async register(req, res) {
        try {
            const {name, password, token} = req.body;

            const decode = jwtDecode(token);
            const user = await User.find({email: decode.email});

            if (!user) {
                return res.status(401).json({message: 'user was not invited'});
            }
            const hash = securityManager.md5(password);
            // console.log(name, decode.email, hash);
            await User.findOneAndUpdate({email: decode.email}, {
                name,
                email: decode.email,
                password: hash,
                activated: true,
            });

            res.status(201).json({token: token, message: 'User was registered successfully!'});
        } catch (e) {
            res.status(401).json({message: e.message});
        }
    },
    async login(req, res) {
        const {email, password} = req.body;

        const user = await User.find({email});

        if (!user.length) {
            return res.status(401).json('user is not found');
        }

        const hash = securityManager.md5(password);
        const userConfirm = await User.find({name: user[0].name, password: hash});

        if (!userConfirm.length) {
            return res.status(401).json('email or password are wrong');
        }

        const tests = await Test.find({_id: userConfirm[0].accessToTest});
        const token = userModel.createAccessJWT(email);

        return res.status(200).json({
            token: token,
            user: {
            name: userConfirm[0].name,
            surname: userConfirm[0].surname,
            email: userConfirm[0].email,
            result: userConfirm[0].results,
            },
            test: tests});
    }
};
