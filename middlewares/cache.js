const publisher = require('../config/redisConfig')

function Cache(req,res,next){
    const redisname = req.originalUrl

    publisher.get(redisname,(err,data)=>{
        if(err)throw err;
        
        if(data !== null){
            console.log(`${redisname} exist`)
            let temp = JSON.parse(data);
            res.json(temp)
        }else{
            console.log('next')
            next()
        }
    })
}

module.exports={Cache}