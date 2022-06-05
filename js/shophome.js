window.onload = function(){
    let search = document.querySelector('#search')
    let maskSearch = document.querySelector('#mask-search')
    let searchBtn = document.querySelector('#searchBtn')
    let menu = document.querySelector('.menu-wrap')
    let down = document.querySelector('#down-menu')
    
    search.addEventListener('focus',function(){
        maskSearch.style.display = 'block'
    })
    
    searchBtn.addEventListener('click',function(){
        location.href = 'searchresults.html'
    })
    
    menu.addEventListener('mouseenter',function(){
        console.log('Comein')
        down.style.display = 'block'
    })
    
    menu.addEventListener('mouseleave',function(){
        down.style.display = 'none'
    })
}