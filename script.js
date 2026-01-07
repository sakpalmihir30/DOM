// var allelem = document.querySelectorAll('.elem')

// allelem.forEach(function (elem) {
//   elem.childNodes[3].addEventListener('click', function () {
// console.log('hello');


//   });

// })

var allbtn=document.querySelectorAll('button')

allbtn.forEach(function(elem){
  elem.addEventListener('click',function(){
    if(elem.innerHTML == 'ADD FRIEND'){
      elem.innerHTML='REMOVE FRIEND'
    }else{
      elem.innerHTML='ADD FRIEND'
    }
  })
})
