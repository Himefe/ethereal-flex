const slide = document.querySelector('.slide_content');
const sliders = document.querySelectorAll('.slide_items');
const controls = document.querySelectorAll('.control');
const slideWidth = document.querySelector('.slide_items');
const slydeStyle = document.querySelector('.slideStyle');

sliders.forEach((slides) => {
  // eslint-disable-next-line no-param-reassign
  slides.style.width = getComputedStyle(slydeStyle).width;
});

function Sliding() {
  const slideWidthTotal2 = getComputedStyle(slideWidth).width;
  if (window.getComputedStyle(slide).marginLeft === '0px') {
    slide.style.marginLeft = `-${slideWidthTotal2}`;
  } else if (window.getComputedStyle(slide).marginLeft === `-${slideWidthTotal2}`) {
    slide.style.marginLeft = `-${+slideWidthTotal2.replace('px', '') * 2}px`;
  } else {
    slide.style.marginLeft = '0px';
  }
}

setInterval(Sliding, 2000);
const menuLista = document.querySelector('[data-menu="lista"]');
const menuButton = document.querySelector('[data-menu="button"]');
const eventos = ['click', 'touchstart'];

function menuMobile(event) {
  event.preventDefault();
  menuLista.classList.toggle('ativo');
}
eventos.forEach((evento) => {
  menuButton.addEventListener(evento, menuMobile);
});

function control(index) {
  controls.forEach((item) => {
    item.classList.remove('ativo');
  });
  controls[index].classList.add('ativo');
}

controls.forEach((item, index) => {
  item.addEventListener('click', () => {
    control(index);
  });
});

const menu = document.querySelector('.navbar');
const banner = document.querySelector('.banner .bannerText h2');

function initAttBack() {
  function att() {
    const sectionTop = banner.getBoundingClientRect().top - 53;
    if (sectionTop < 0) {
      menu.classList.add('menuBack');
    } else {
      menu.classList.remove('menuBack');
    }
  }
  if (!menu.classList.contains('menuBack')) {
    window.addEventListener('scroll', att);
  } else {
    window.removeEventListener('scroll');
  }
}

initAttBack();

const numeros = document.querySelectorAll('[data-numero]');

const animaNumero = () => {
  numeros.forEach((numero) => {
    let start = 0;
    const total = +numero.innerText;
    const timer = setInterval(() => {
      if (start < total) {
        // eslint-disable-next-line no-plusplus
        start++;
        numero.innerText = start;
      } else if (start === total) {
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
};

const clientesProject = document.querySelector('.aboutClientProject');

function ScrollNumero() {
  if ((clientesProject.getBoundingClientRect().top - (window.innerHeight * 0.8)) < 0) {
    clientesProject.classList.add('mutado');
  } else if (clientesProject.classList.contains('mutado')) {
    clientesProject.classList.remove('mutado');
  }
}

window.addEventListener('scroll', ScrollNumero);

const handleMutation = (mutation) => {
  if (mutation[0].target.classList.contains('mutado')) {
    observer.disconnect();
    animaNumero();
  }
};

const observer = new MutationObserver(handleMutation);
observer.observe(clientesProject, { attributes: true });
