let name = "Apoorva"
console.log("one")

function y(username=name){
  console.log(username)
}

y()

const promiseObj = new Promise(function promiseCallback(res,rej){
  let num = Math.random()*100;
  if(num>50){
    res()
  }else{
    rej()
  }
})

promiseObj.then(function resolveCb(){
  console.log("resolved ran")
}).catch(function rejectCb(err){
  console.log("reject ran")
})

setTimeout(function xoxo(){
    console.log("two")
}, 0)

y("Rajgopal")

console.log("three")