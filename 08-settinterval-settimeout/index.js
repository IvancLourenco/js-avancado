//setTimeout(() => {
  //  alert("Ola mundo")
//}, 3000);

//setTimeout(() => {
  //  console.log("console dentro do /setTimeOut")
//},4000);

//console.log("depois do console do Timeout")

//setInterval(() => {
   // console.log("Executando a cada dois segundos")
//},4000);

const idDoIntervalo = setInterval(() => {
                        console.log("Executando a cada dois segundos")
                    },2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout()