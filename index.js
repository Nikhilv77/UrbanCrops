const swiper = new Swiper('.swiper', {
  
    pagination: {
      el: '.swiper-pagination',
      type:'bullets',
      clickable:true,
    },  autoplay: {
        delay: 5000, 
        disableOnInteraction: false,
      },
  });

  const adButton = document.querySelector('.show-video');
  adButton.addEventListener('click',()=>{
    document.getElementById('video').style.display = 'grid'
  })
  const closeButton = document.querySelector('.close-video');
  closeButton.addEventListener('click',()=>{
    document.getElementById('video').style.display = 'none'
  })
  const faqItems = document.querySelectorAll('.accordion-item');
  faqItems.forEach(item=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('active')
      const arrowIcon = item.querySelector('#arrow');
      if(arrowIcon){
        const path = arrowIcon.querySelector('path');
        if(path){
          const isActive = item.classList.contains('active');
          path.setAttribute('d',isActive?'M20.5 17.5l-6-6-6 6' : 'M20.5 11.5l-6 6-6-6')
        }
      }
    })
  })

const menuButton = document.querySelector('.navbar-button-menu').addEventListener('click',()=>{
   const sidebar = document.querySelector('.navbar-items');
   sidebar.style.display = 'flex';
})

const crossButton = document.querySelector('.navbar-button-cross').addEventListener('click',()=>{
  const sidebar = document.querySelector('.navbar-items');
  sidebar.style.display = 'none';
})

const cardButtons = document.getElementsByClassName('card-button');

for (let i = 0; i < cardButtons.length; i++) {
  cardButtons[i].addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
}

const navItems = document.querySelectorAll('nav ul li');
const removeActive = ()=>{

  navItems.forEach(item=>{
    const anchor = item.querySelector('a');
    anchor.classList.remove('active')
  })
}

navItems.forEach(item=>{
  const anchor = item.querySelector('a');
  anchor.addEventListener('click',()=>{
    removeActive();
    anchor.classList.add('active')
  })
})