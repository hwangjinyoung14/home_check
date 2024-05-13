let logoImg = document.querySelector('.logo img'),
    header = document.querySelector('header'),
    TOP = window.pageYOffset || document.documentElement.scrollTop,
    menuItems = document.querySelectorAll('ul li'),
    nav = document.querySelector('.nav');

    /*헤더에 마우스 올리면 서브 메뉴가 나타남*/
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseenter', function () {
    let subMenu = this.querySelector('.sub_menu');
    if (subMenu) {
      subMenu.style.display = 'block'; 
    }
  });
  menuItems[i].addEventListener('mouseleave', function () {
    let subMenu = this.querySelector('.sub_menu');
    if (subMenu) {
      subMenu.style.display = 'none'; 
    }
  });
}

function changeLogoSrc(src){
  logoImg.setAttribute('src', src);
}

function scrollAction(){
  TOP = window.pageYOffset || document.documentElement.scrollTop;
  if(TOP === 0){
    header.classList.remove('on');
    changeLogoSrc('images/logo.png');
    nav.classList.remove('scroll-nav');
  }else{
    header.classList.add('on');
    changeLogoSrc('images/logo_o.png');
    nav.classList.add('scroll-nav');
  }
  //변수지정 .서비스 타이틀 위치
  let serTitleOffset = document.querySelector('.service .title').offsetTop-500;
  if(TOP > serTitleOffset){
    document.querySelectorAll('.service .title, .service .subTitle, .service .service_content').forEach(function(z){
      z.classList.add('on');
    });
  }
}

window.addEventListener('scroll', scrollAction);

