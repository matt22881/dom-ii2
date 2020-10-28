const navLogo = document.querySelector('.logo-heading')
document.addEventListener('wheel',() => {
    navLogo.style.color = 'blue'
    navLogo.style.border = '2px solid black'
})
const nav = document .querySelector('.nav')
nav.addEventListener('mouseover', () =>  nav.style.backgroundColor = 'green')
nav.addEventListener('mouseleave', () =>  nav.style.backgroundColor = 'white')
const headImg = document.querySelector('.intro img')
headImg.addEventListener('load', () => headImg.style.filter = 'blur(4px)')
headImg.addEventListener('auxclick', () => alert('double click picture to regain focus'))
headImg.addEventListener('dblclick', () => {
    headImg.style.filter = 'blur(0)'
    const newBtn =document.createElement('button')
    newBtn.textContent = `click me`
    newBtn.style.backgroundColor = 'red'
    newBtn.style.display = 'block'
    newBtn.addEventListener('mousedown', () => {
        newBtn.style.backgroundColor = 'purple'
        newBtn.style.textTransform = 'uppercase'
    })
    newBtn.addEventListener('mouseup', () => {
        newBtn.style.textTransform = 'capitalize'
        newBtn.style.backgroundColor = 'green'
    newBtn.addEventListener('blur', () => newBtn.style.border = '2px solid orange')
    })
    const entry = document.querySelector('.intro p')
    entry.appendChild(newBtn)
})
const bod = document.querySelector('body')
const welc = document.querySelector('.intro h2')
bod.addEventListener('keydown', (e) => {
    let x = ''
    x = e.key
    console.log(e)
    welc.textContent = `${welc.textContent} ${x}`
})
