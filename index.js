document.querySelector("#next").addEventListener('click', e=>{
    document.querySelector('slide[data-index="1"]').classList.remove('active')
    document.querySelector('slide[data-index="2"]').classList.add('active')
})

document.querySelector("#back").addEventListener('click', e=>{
    document.querySelector('slide[data-index="2"]').classList.remove('active')
    document.querySelector('slide[data-index="1"]').classList.add('active')
})