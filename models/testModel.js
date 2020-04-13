const arr = require('./tests');
const mongoose = require('mongoose');

const testScheme = new mongoose.Schema({
        title: String,
        description: String,
        questions: [
            {
                correctAns: [],
                subject: [{
                    name: String,
                }],
                options: [
                    {
                        title: String,
                        correct: false,
                    },
                    {
                        title: String,
                        correct: false,
                    },
                    {
                        title: String,
                        correct: false,
                    },
                    {
                        title: String,
                        correct: false,
                    }
                ],
                title: String,
                multiply: false,
                code: String,
            }
        ]
    },
    {
        timestamps: true,
    }
);

const Test = mongoose.model('Test', testScheme);
module.exports = Test;

// arr.forEach(async ({_id, title, description, questions}) => {
//     await Test.create({
//         _id: _id,
//         title: title,
//         description: description,
//         questions: questions.map(({subject, correctAns, options, _id, title, multiply, code}) => {
//             console.log(options.map(({_id, title, correct}) => {
//                 console.log([{_id: _id, title: title, correct: correct || false}]);
//                 return [{_id: _id, title: title, correct: correct || false}]
//             }));
//             return {
//                 correctAns: correctAns.map((a) => a || {}),
//                 subject: subject.map(({_id, name}) => ({_id: _id, name: name})),
//                 options: options.map(({_id, title, correct}) => {
//                     // console.log([{_id: _id, title: title, correct: correct || false}]);
//                     return {_id: _id, title: title, correct: correct || false};
//                 }),
//                 _id: _id,
//                 title: title,
//                 multiply: multiply || false,
//                 code: code || '',
//             }
//         }),
//     }, function (err, doc) {
//         mongoose.disconnect();
//
//         if (err) return console.log(err);
//
//         console.log("Сохранен объект test", doc);
//     });
// });