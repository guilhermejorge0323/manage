export default function navbarControl(button,navbar,overlay,html,img){
    button.addEventListener('click',(e) => {
        navbar.classList.toggle('ativo');
        overlay.classList.toggle('ativo');
        html.classList.toggle('ativo');
        if(navbar.classList.contains('ativo')){
            img.src = './src/images/icon-close.svg';
        }else{
            img.src = './src/images/icon-hamburger.svg';
        }

    });
}