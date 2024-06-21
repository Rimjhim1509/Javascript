const clock = document.getElementById('clock')
const clocks = document.querySelector('#clock')
setInterval(function(){
  let date = new Date();
//console.log(date.toLocaleDateString());
//aisa krne se console me update hoga
clock.innerHTML = date.toLocaleString();

},500)
//method h jo ek interval tk chalega
