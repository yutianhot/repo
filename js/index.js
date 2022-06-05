window.onload = function() {
    var current = 0;
    var list = document.querySelectorAll('.slider-item')
    var dotList = document.querySelectorAll('.dot-item')
    var next = document.querySelector('#arrow-back')
    var goShop = document.querySelector('#shop')

    next.addEventListener('click', function() {
        list[current].classList.remove('active')
        dotList[current].classList.remove('active')


        if (current == list.length - 1) {
            current = 0;
        } else {
            current += 1;
        }

        list[current].classList.add('active')
        dotList[current].classList.add('active') 

    })

    goShop.addEventListener('click', function() {
        location.href = './shophomepage.html'
    })
}