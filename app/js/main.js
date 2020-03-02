(function () {
    let languageChose = document.querySelector('.language-chose');
    let languageDropdown = document.querySelector('.language-dropdown');
    languageChose.addEventListener('click', () => {
        languageDropdown.classList.toggle('active');
    });



}());
(function () {
    let openBox = document.querySelector('.open-box');
    let timeBox = document.querySelector('.time-box');
    let workDescription = document.querySelector('.work-description');
    let rotateImg = document.querySelector('.rotate-img');
    let workTimeContainer = document.querySelector('.work-time__container');
    let workTimeHidden = document.querySelector('.work-time__hidden');

    openBox.addEventListener('click', () => {
        timeBox.classList.toggle('active');
        workDescription.innerText = 'Зараз працює';
        rotateImg.classList.toggle('active');
        workTimeContainer.classList.toggle('active');
        workTimeHidden.classList.toggle('active');

        if (timeBox.classList.contains('active')) {
            workDescription.innerText = 'Зараз працює'

        } else {
            workDescription.innerText = 'ПН-СБ 09:00-20:00'
        };

    });



}());
(function () {
    let sliderBox = document.querySelectorAll('.slider-box');
    let heartBox = document.querySelectorAll('.heart-box ');
  
    sliderBox.forEach(el => {
        el.addEventListener('mouseover', () => {
         el.classList.add('active');  
        
        
         if (el.classList.contains('active')) {
            el.addEventListener('mouseout' ,()=> {
                el.classList.remove('active')
              
            })
            
        }
    
        });
    }); 

}());
(function () {
  let footerLangContainer = document.querySelector('.footer-language__container');
  let footerLangDrop = document.querySelector('.footer-dropdown');
  
  footerLangContainer.addEventListener('click', () => {
    footerLangDrop.classList.toggle('active');
});



}());
(function () {
    let menuBtn = document.querySelector('.menu');
    let menuMobile = document.querySelector('.menu-mobile');
    
    menuBtn.addEventListener('click', () => {
      menuMobile.classList.toggle('active');
  });
  
  
  
  }());
$(function(){
    
    $('.container-inner').slick({
        infinite: true,
        fade: false,
        autoplay: false,
        dots: true,
        prevArrow: '<div class="prev-btn"><img src="img/arrow_back-24px.svg" alt=""></div>',
        nextArrow: '<div class="next-btn"><img src="img/arrow_forward-24px.svg" alt=""></div>',
    });
     
    
      
});
$(function(){
    
    $('.slider-mobile').slick({
        infinite: true,
        fade: false,
        autoplay: false,
        dots: false,
        prevArrow: false, 
        nextArrow: false,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
        
        ]

    });
     
      
});
