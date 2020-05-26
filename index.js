const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'app/dist')))
    .use('/static', express.static('public'))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('*', (req, res) => {
        res.sendFile(__dirname + '/app/dist/index.html');
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))