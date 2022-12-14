const menuButton = document.getElementById('menu').addEventListener('click', ()=>{
    const menuIcon =document.getElementById('Icon')
    menuIcon.classList.toggle('fa-x')
    const nevbar = document.getElementById('sidenevbar');
    nevbar.classList.toggle('sidenevbarResponsive');
})

const submit = document.getElementById('submit').addEventListener('click',()=>{
    document.getElementById('errorMessage').innerHTML = "Sorry, This function is currently unavailable!"
    setTimeout(()=>{
        document.getElementById('errorMessage').innerHTML = "";
    },2500)
})

// switch Seetings
const bd= document.getElementsByClassName('banglaData')
const en= document.getElementsByClassName('en')

const switch1 = document.getElementById('switch').addEventListener('click',()=>{
    console.log('clicked')
    Array.from(en).forEach((element)=>{
        element.classList.toggle('en1')
    })
    Array.from(bd).forEach((element)=>{
        element.classList.toggle('banglaDataDis')
    })
})
