window.addEventListener("load",() => {
    let button = document.getElementsByClassName("header__burger-menu")[0];
    let dropMenu = document.getElementsByClassName("header__drop-menu")[0];
    button.addEventListener("click", () =>{
        if (button.dataset.status  === ''){
            button.dataset.status = 'active';
            dropMenu.classList.remove('header__drop-menu');
            dropMenu.classList.add('header__drop-menu_active');
        } else {
            button.dataset.status = '';
            dropMenu.classList.remove('header__drop-menu_active');
            dropMenu.classList.add('header__drop-menu');
        }
    } )
} ) 