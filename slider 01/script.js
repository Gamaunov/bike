const slides =  document.querySelectorAll('.slide')
slides.forEach((elem) => {
    elem.onclick = () => {
        document.querySelector('.slide.active')?.classList.remove('active')
        elem.classList.add('active')
    }
})