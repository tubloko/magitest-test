const mongoose = require('mongoose');
const app = require('./app');

require('custom-env').env();

const DB = `mongodb+srv://tubloko:${process.env.PASS_MONGO}@cluster0-tqfrv.mongodb.net/test?retryWrites=true&w=majority`;
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('server was started');
});
