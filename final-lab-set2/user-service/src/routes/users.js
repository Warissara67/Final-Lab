const express = require('express')

const router = express.Router()

router.get('/health',(req,res)=>{
  res.json({
    status:'ok',
    service:'user-service',
    time:new Date()
  })
})

module.exports = router