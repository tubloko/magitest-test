const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: String,
        surname: String,
        email: {
            type: String,
            unique: true,
            required: true,
        },
        group: String,
        comment: String,
        password: String,
        invited: {
            type: Boolean,
            default: false,
        },
        activated: {
            type: Boolean,
            default: false,
        },
        accessToTest: {
            type: [String],
            required: true,
        },
        results: [
            {
                results: [String],
                testId: String,
            }
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;