let item = document.querySelectorAll('.dropdown__wrapper')
item.forEach(element => {
    element.addEventListener('click',(e)=>{
        e.currentTarget.classList.toggle('drop_active')
    })
})