window.onload = function(){
    let search = document.querySelector('#search')
    let maskSearch = document.querySelector('#mask-search')
    let searchBtn = document.querySelector('#searchBtn')
    let down = document.querySelector('#down-select-btn')
    let downList = document.querySelector('#down-select-list')
    
    search.addEventListener('focus',function(){
        maskSearch.style.display = 'block'
    })
    
    searchBtn.addEventListener('click',function(){
        location.href = 'searchresults.html'
    })
    
    down.addEventListener('click',function(){
        console.log(downList.classList)
        if (downList.classList.contains('hide')) {
            downList.classList.remove('hide')
        } else {
            downList.classList.add('hide') 
        }
    })  
}