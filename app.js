//alert('test');
let icon=document.querySelector('.bi-list');
let sidebar=document.querySelector('.sidebar')
let overlay=document.querySelector('.overlay')
let buttonSide=document.querySelectorAll('.btnList')
//alert('youuuuu')
//console.log(icon)
icon.addEventListener('click',()=>{
   
 //alert('immmm')
    sidebar.style.transform='translate(0)'
    overlay.style.transform='translate(0)'
    
})

 overlay.addEventListener('click',()=>{
    
    sidebar.style.transform='translate(-100%)'
    overlay.style.transform='translate(-100%)'
 })

 buttonSide.addEventListener('mouseover',()=>{
   // alert('im here')
 })
