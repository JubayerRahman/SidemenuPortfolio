const menuButton = document.getElementById('menu').addEventListener('click', ()=>{
    const menuIcon =document.getElementById('Icon')
    menuIcon.classList.toggle('fa-x')
    const nevbar = document.getElementById('sidenevbar');
    nevbar.classList.toggle('sidenevbarResponsive');
})