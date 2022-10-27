const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/course.json')
const categories = require('./data/category.json')

app.get('/', (req, res) => {
    res.send('course-academy server is running')
})

app.get('/category-list', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {

    const id = req.params.id;

    if (id === '7') {
        res.send(courses)
    }
    else {
        const category_list = courses.filter(n => n.category_id === id)
        res.send(category_list);

    }

})



app.get('/course', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;

    const selectedCourse = courses.find(course => course.id == id);
    console.log(id, selectedCourse)
    res.send(selectedCourse);
})


app.listen(port, () => {
    console.log(`Course academy running on port, ${port}`)
})