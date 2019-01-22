const express = require('express');
const router = express.Router();
const bookmarks = [];
let currentId = 1;

router.get('/', (req, res)=> {
    res.send(bookmarks)
});

router.post('/',(req, res)=> {
    let bm = req.body
    bm.id = currentId++;
    bookmarks.push(bm)
    res.sendStatus(200);
});

router.get('/:id', (req,res)=>{
    const bm = bookmarks.filter(b => b.id === parseInt(req.params.id));
    res.send(bm)
});

router.delete('/:id', (req,res) => {
    const bm = bookmarks.filter(b => b.id === parseInt(req.params.id));
    res.sendStatus(200);
});

module.exports = router;
