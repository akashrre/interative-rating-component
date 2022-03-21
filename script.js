let rating = document.querySelector('.rating')
let thankyou = document.querySelector('.thankyou')
let output = 0
let stars = document.querySelectorAll('.star')
let buttons = document.querySelectorAll('.button')
let submit = document.querySelector('.submit')
let attention = document.querySelector('.attention')

// Rating buttons click
buttons.forEach(button => {
    button.addEventListener('click', event => {
        attention.innerHTML = ''
        output = event.target.innerText
        buttons.forEach(x => {
            x.classList.remove('active')
        })
        event.target.classList.remove('hovered')
        event.target.classList.add('active')
        document.querySelector('span').innerText = output
        stars.forEach(x => {
            x.style.opacity = '0'
        })
        for (let i = 0; i < output; i++) {
            stars[i].style.opacity = '1'
        }
    })
})

// Rating button hover
buttons.forEach(button => {
    button.addEventListener('mouseenter', event => {
        if (!button.classList.contains('active')) {
            event.target.classList.add('hovered')
        }
    })
    button.addEventListener('mouseleave', event => {
        buttons.forEach(x => {
            event.target.classList.remove('hovered')
        })
    })
})

// Submit button
submit.addEventListener('click', event => {
    if (output > 0) {
        rating.classList.add('hide')
        thankyou.classList.remove('hide')
    } else {
        attention.innerHTML = 'Please select a rating 1-5'
    }
})