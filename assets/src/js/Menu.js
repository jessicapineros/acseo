export class Menu {
    constructor() {
        this.btnMenu = document.querySelector('.js-burger-menu');
        this.menu = document.querySelector('.js-menu');
        this.closeMenu = document.querySelector('.js-close');

        if (this.btnMenu && this.menu) {
            this.init();
        }
    }

    init() {
        this.btnMenu.addEventListener('click', () => {
            this.menu.classList.add('open'); 
        });
    
        this.closeMenu.addEventListener('click', () => {
            this.menu.classList.remove('open');
        });
    }
}