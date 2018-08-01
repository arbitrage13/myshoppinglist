const express = require('express')
const router = express.router();

router.get('/',(req, res=>{
    res.send('Im Home')
}))

module.exports = router