const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', { 
    useNewUrlParser: true, useUnifiedTopology: true
})

app.get('/', (req, res) => {
    const articles = [{
        title: 'test articles',
        createdAt : new Date(),
        description: 'Test description'
    }, 
    {
        title: 'test articles 2',
        createdAt : new Date(),
        description: 'Test description 2'
    }]
    //const articles =
    res.render('articles/index', { articles : articles})
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))


app.use('/articles', articleRouter)

app.listen(5000)
