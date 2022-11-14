const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('ul li');
    

    burger.addEventListener('click',() => {
        //toggle
        nav.classList.toggle('nav-active'); 

            //animate body
       
        
                //animate ul li
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + .5}s`;
            }
        
        });
    });

}

navSlide();

