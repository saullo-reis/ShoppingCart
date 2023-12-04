// routes/index.js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // This assumes 'index' is the name of your view file
});

export { router };
