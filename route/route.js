const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); //   ./views/index.ejs를 불러와서 출력
});

router.get('/register', (req, res) => {
    res.render('register'); //   ./views/index.ejs를 불러와서 출력
});

module.exports = router;