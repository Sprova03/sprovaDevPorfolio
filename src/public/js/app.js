// seleccion de elementos

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links')
const sticky = document.querySelector("nav")
const navLinks = document.querySelectorAll('.nav-links li')
const imgCover = document.querySelectorAll('#img-cover')
// Desplasamiento del menu.
const linksMenu = document.querySelectorAll('.links__menu')
const linksForEach = document.querySelectorAll('#links')
const aboutBox = document.querySelector('.about-box');
const header = document.querySelector('.header-box');
const slider = document.querySelectorAll('.slide');
const btnRigth = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const inputName = document.querySelector('name-form')
const inputEmail = document.querySelector('form-email')
const inputMess = document.querySelector('form-message')
const spanPresen = document.querySelectorAll('.presen-span')





let currSlide = 0 
let maxSlice = slider.length

const goToSlide = (slid) => {
    slider.forEach((e, i) => {
        e.style.transform = `translateX(${100 * (i - slid)}%)`
 })
}
goToSlide(0)

const nextSlide = () => {
    if(currSlide === maxSlice - 1){
        currSlide = 0
    }else{    
        currSlide++;
    }
    goToSlide(currSlide)
};
const prevSlide = () => {
    if(currSlide === 0){
      currSlide = maxSlice - 1
     }else {
       currSlide --;
     }
     goToSlide(currSlide)
  }


btnRigth.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)




// burger menu.
    
    burger.addEventListener('click', () => {
        // Nav Toggle
        nav.classList.toggle('nav-active')

       // animate link
       navLinks.forEach((link, index) => {
       link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        });

       // X animation burger     
       burger.classList.toggle('toggle')

    });
    const stickyNav = aboutBox.getBoundingClientRect().top;
    
    // sticky menu.
    const callObserver = (entries, option) => {
        entries.forEach(entry =>{
            if(!entry.isIntersecting) sticky.classList.add("sticky");
            else sticky.classList.remove("sticky")
        })
    }   
    const obsOptions = {
        root : null,
        threshold: [0.4]
    }

    const observer = new IntersectionObserver(callObserver, obsOptions)
    observer.observe(header)


    // window.addEventListener('scroll', () => {

    //     if(window.scrollY > stickyNav + 90) {sticky.classList.add("sticky")}
    //     else sticky.classList.remove("sticky")
    // })

 
    linksMenu.forEach((el, i) => {
        el.addEventListener('click', (e)=> {
        e.preventDefault();
        linksForEach[i].scrollIntoView({behavior: 'smooth'})
    }) 
    })

    const callObsInfo = (entries, observer) => {
        const [entry] = entries;
        if(!entry.isIntersecting)return
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target)
    }
    const obsInfOptions = {
        root: null,
        threshold: [0.50]
    }

    const observerInfo = new IntersectionObserver(callObsInfo, obsInfOptions)
    
    const boxObserver = document.querySelectorAll('.box--observer');
    boxObserver.forEach(boxs => {
        observerInfo.observe(boxs);
        boxs.classList.add('section--hidden')
    })

        const emailPop = (message) => {
          alert(message)
        }
        
        const sendMailAlert = document.querySelector('.form')
            sendMailAlert.addEventListener('submit', (e) => {
            const message = `Email Enviado`;
            emailPop(message)
        })
     

        spanPresen.forEach(e => {
            e.addEventListener('mouseover', () => {
                e.classList.add('presen-spann')
            })
        })
        spanPresen.forEach(e => {
            e.addEventListener('mouseout', () => {
                e.classList.remove('presen-spann')
            })
        })