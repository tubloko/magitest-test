const User = require('./../models/usersModel');

module.exports = {
    async addNewUser(req, res) {
        try {
            const {name, surname, email, comment, group, accessToTest} = req.body;
            // console.log(name, surname, email, comment, group);
            // await userModel.addNewUser(name, surname, email, comment, group, accessToTest);
            await User.create({
                name,
                surname,
                email,
                comment,
                group,
                accessToTest
            });
            return res.status(201).json({message: 'User was added successfully!'});
        } catch (e) {
            return res.status(401).json({message: `something went wrong: ${e.message}`});
        }
    },
    async getAllUsers(req, res) {
        try {
            const filter = req.params.filter;
            let users = [];
            // console.log(filter);
            if (filter === 'NotActivated') users = await User.find({ activated: false, invited: true });
            else if (filter === 'NotInvited') users = await User.find({ invited: false });
            else if (filter === 'Activated') users = await User.find({ activated: true });
            else users = await User.find();

            res.status(200).json({users});
        } catch (e) {
            res.status(401).json({message: `users not found: ${e.message}`});
        }
    },
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            console.log(id);
            await User.deleteOne({_id: id});

            return res.status(201).json({message: 'user was deleted successfully!'});
        } catch (e) {
            return res.status(401).json({message: `something went wrong: ${e.message}`});
        }
    },
    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const {name, surname, email, comment, group} = req.body;

            await User.findOneAndUpdate({_id: id}, {name, surname, email, comment, group});

            return res.status(202).json({message: 'user was updated successfully!'});
        } catch (e) {
            return res.status(401).json({message: `something went wrong: ${e.message}`});
        }
    }
};
