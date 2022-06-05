window.onload = function(){
    let search = document.querySelector('#search')
    let maskSearch = document.querySelector('#mask-search')
    let searchBtn = document.querySelector('#searchBtn')
    search.addEventListener('focus',function(){
        maskSearch.style.display = 'block'
    })
    
    searchBtn.addEventListener('click',function(){
        location.href = 'searchresults.html'
    })
}