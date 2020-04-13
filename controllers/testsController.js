const Test = require('./../models/testModel');
const User = require('./../models/usersModel');
const jwtDecode = require('jwt-decode');
const utils = require('./../utils/getResult');

module.exports = {
    async getAllTest(req, res) {
        try {
            const tests = await Test.find();

            return res.status(200).json({data: tests});
        } catch (e) {
            return res.status(401).json({message: `Something went wrong: ${e.message}`});
        }
    },
    async getAllResult(req, res) {
        try {
            const {selected, testId, token} = req.body;
            const decode = jwtDecode(token);

            const questions = await Test.findOne({_id: testId});
            const result = await utils.getResult(selected, questions);
            const user = await User.find({email: decode.email});
            const userResult = [...user[0].results, {results: result, testId: testId}];

            await User.findOneAndUpdate({email: decode.email}, {results: userResult});

            return res.status(200).json({result: result});
        } catch (e) {
            return res.status(401).json({message: `Something went wrong: ${e.message}`});
        }
    },
};