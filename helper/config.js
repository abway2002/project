const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb+srv://abway2002:a3084242a@cluster0.vpio9.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    const db = mongoose.connection

    db.on('open', () => console.log('succsess connect to MongoDB'))
    db.on('err', (err) => console.log(`erorr connect MongoDB: ${err}`))
}