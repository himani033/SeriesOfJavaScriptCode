const clo = document.getElementById('clock');
//  console.log(clo)

setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);


