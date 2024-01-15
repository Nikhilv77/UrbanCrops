
const menuButton = document.querySelector('.navbar-button-menu').addEventListener('click',()=>{
  const sidebar = document.querySelector('.navbar-items');
  sidebar.style.display = 'flex';
})

const crossButton = document.querySelector('.navbar-button-cross').addEventListener('click',()=>{
 const sidebar = document.querySelector('.navbar-items');
 sidebar.style.display = 'none';
})