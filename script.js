
var main = document.body
// var cursor = document.querySelector('#cursor')

var h1=document.querySelector('h1')

// main.addEventListener('mousemove', function (val) {
  
//       cursor.style.left=val.x +'px'
//       cursor.style.top=val.y +'px'
// })

main.addEventListener('keydown',function(dets){
  console.log(dets);
  
  h1.innerHTML=dets
})
    