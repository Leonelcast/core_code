// una promesa es aquella que se cumple o no en un futuro y su estado queda como en pendiente mientras esto se cumple

//CREATE
const ride = new Promise((resolve, reject)=>{
    if(arrived){
        resolve('driver arrived')
    }else{
        reject('driver bailed')
    }
})

//CONSUME
ride
    .then(value =>{
        console.log(value)
    })
    .catch(error =>{
        console.log(error)
    })