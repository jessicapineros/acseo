import $ from 'jquery';
import 'slick-carousel';

export class Slider {
    constructor() {
        this.slider = document.querySelector('.js-slider');

        if (this.slider) {
            this.init();
        }
    }

    init() {
        $('.js-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 3,
            infinite: false,
            speed: 500,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                  }
                }
            ]
        })
    }
}