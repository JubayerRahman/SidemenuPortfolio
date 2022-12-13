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