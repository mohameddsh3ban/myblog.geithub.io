const btn = document.getElementById('menu-btn')
const menu = document.getElementById('default-sidebar')
btn.addEventListener('click',function() {
    
    if(btn.classList.contains('open')){
        btn.classList.remove('open')
        menu.classList.add('hidden')
        menu.classList.remove('block')
    }else{  btn.classList.add('open')
    menu.classList.remove('hidden')
    menu.classList.add('block')
    console.log('reached')}
  
})