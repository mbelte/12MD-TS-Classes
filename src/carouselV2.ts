import { CarouselInput } from "./type";
import Carousel from "./carousel";


class CarouselV2 extends Carousel {
    slideQty: number;
    dotNav: HTMLDivElement;
    dotNavBtn: HTMLButtonElement;
    dotNavBtnsArray: HTMLButtonElement[];


    constructor(content: CarouselInput[], target: string) {
        super(content, target)

        this.slideQty = content.length

        this.createDotNav()
        this.appendDotNavBtns()
        this.dotNavBtnsArray = Array.from(this.dotNav.querySelectorAll('.carousel__nav-btn'))
    }

    initNavDot(dotBtn: HTMLButtonElement) {
        dotBtn.addEventListener('click', (event) => {
            const   targetDotBtn = <HTMLButtonElement>event.target,
                    currentSlide = <HTMLDivElement>this.getCurrentSlide(),
                    currentDotBtn = <HTMLButtonElement>this.getCurrentDotBtn()

            const   targetIndex = this.dotNavBtnsArray.findIndex(dotBtn => dotBtn === targetDotBtn),
                    targetSlide = this.slidesArray[targetIndex]

            this.moveToSlide(currentSlide, targetSlide)
            this.updateDotNavBtn(currentDotBtn, targetDotBtn)
        })
    }

    createDotNav() {
        this.dotNav = document.createElement('div')
        this.carousel.appendChild(this.dotNav)
        this.dotNav.classList.add('carousel__nav')
    }

    createDotNavBtn(active: boolean) {
        this.dotNavBtn = document.createElement('button')
        this.dotNav.appendChild(this.dotNavBtn)
        this.dotNavBtn.classList.add('carousel__nav-btn')

        if (active) this.dotNavBtn.classList.add('carousel__nav-btn--active', 'js-carousel-dotBtn-active')

        this.initNavDot(this.dotNavBtn)
    }

    appendDotNavBtns() {
        let a = false
        for (let i = 0; i < this.slideQty; i++) {
            a = !i && true
            this.createDotNavBtn(a)
        }
    }

    updateDotNavBtn(current: HTMLButtonElement, target: HTMLButtonElement) {
        current.classList.remove('carousel__nav-btn--active', 'js-carousel-dotBtn-active')
        target.classList.add('carousel__nav-btn--active', 'js-carousel-dotBtn-active')
    }

    getCurrentDotBtn() {
        return this.dotNav.querySelector('.js-carousel-dotBtn-active')
    }

    moveToNextSlide() {
        const current = this.getCurrentSlideIndex()
        super.moveToNextSlide()
        const target = this.getCurrentSlideIndex()

        this.updateDotNavBtn(this.dotNavBtnsArray[current], this.dotNavBtnsArray[target])
    }

    moveToPrevSlide() {
        const current = this.getCurrentSlideIndex()
        super.moveToPrevSlide()
        const target = this.getCurrentSlideIndex()

        this.updateDotNavBtn(this.dotNavBtnsArray[current], this.dotNavBtnsArray[target])
    }

    getCurrentSlideIndex() {
        const current = this.getCurrentSlide()
        return this.slidesArray.findIndex(slide => slide === current)
    }
}


export default CarouselV2