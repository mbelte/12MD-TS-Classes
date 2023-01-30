import { CarouselInput } from "./type";


class Carousel {
    targetElement: HTMLDivElement;
    carousel: HTMLDivElement;
    viewportContainer: HTMLDivElement;
    viewport: HTMLUListElement;
    slide: HTMLDivElement;
    slideImg: HTMLImageElement;
    slidesArray: HTMLDivElement[];

    btnNext: HTMLButtonElement;
    btnPrev: HTMLButtonElement;

    carouselWidth: number;

    constructor(content: CarouselInput[], target: string) {
        this.targetElement = document.querySelector(target)

        this.createCarousel()
        this.carouselWidth = this.carousel.getBoundingClientRect().width

        this.createViewportContainer()
        this.createViewport()
        this.createPrevBtn()
        this.createNextBtn()

        this.appendSlides(content)
        this.slidesArray = Array.from(this.viewport.querySelectorAll('.carousel__item'))

        this.initPrevBtnEvent()
        this.initNextBtnEvent()
    }


    initPrevBtnEvent() {
        this.btnPrev.addEventListener('click', () => {
            this.moveToPrevSlide()
        })
    }

    initNextBtnEvent() {
        this.btnNext.addEventListener('click', () => {
            this.moveToNextSlide()
        })
    }

    createCarousel() {
        this.carousel = document.createElement('div')
        this.targetElement.appendChild(this.carousel)
        this.carousel.classList.add('carousel')
    }

    createViewportContainer() {
        this.viewportContainer = document.createElement('div')
        this.carousel.appendChild(this.viewportContainer)
        this.viewportContainer.classList.add('carousel__viewport-container')
    }

    createViewport() {
        this.viewport = document.createElement('ul')
        this.viewportContainer.appendChild(this.viewport)
        this.viewport.classList.add('carousel__viewport')
    }

    createPrevBtn() {
        this.btnPrev = document.createElement('button')
        this.viewportContainer.appendChild(this.btnPrev)
        this.btnPrev.classList.add('carousel__btn', 'carousel__btn--left')
    }

    createNextBtn() {        
        this.btnNext = document.createElement('button')
        this.viewportContainer.appendChild(this.btnNext)
        this.btnNext.classList.add('carousel__btn', 'carousel__btn--right')
    }

    setSlidePosition(slide: HTMLDivElement, index: number) {
        slide.style.left = this.carouselWidth * index + 'px'
    }

    createSlide() {
        this.slide = document.createElement('div')
        this.viewport.appendChild(this.slide)
        this.slide.classList.add('carousel__item', 'js-carousel-item')

        return this.slide
    }

    getCurrentSlide() {
        return this.viewport.querySelector('.js-carousel-active')
    }

    setCurrentSlide(slide: HTMLDivElement) {
        slide.classList.add('js-carousel-active')
    }

    removeCurrentSlide(slide: HTMLDivElement) {
        slide.classList.remove('js-carousel-active')
    }

    createImage(slide: HTMLDivElement | HTMLLIElement, img: string, title: string) {
        this.slideImg = document.createElement('img')
        slide.appendChild(this.slideImg)
        this.slideImg.classList.add('carousel__img')
        this.slideImg.src = img
        this.slideImg.alt = title
    }

    appendSlides(content: CarouselInput[]) {
        content.forEach(({img, title}, index) => {
            const slideElem = this.createSlide()
            this.setSlidePosition(slideElem, index)
            if (!index) this.setCurrentSlide(slideElem)

            this.createImage(slideElem, img, title)
        });
    }

    moveToSlide(current: HTMLDivElement, target: HTMLDivElement) {
        const amountToMove = target.style.left

        this.removeCurrentSlide(current)
        this.setCurrentSlide(target)

        this.viewport.style.transform = `translateX(-${amountToMove})`
    }

    moveToNextSlide() {
        const currentSlide = <HTMLDivElement>this.getCurrentSlide()
        const nextSlide = <HTMLDivElement>currentSlide.nextElementSibling

        if (nextSlide) {
            this.moveToSlide(currentSlide, nextSlide)
        } else {
            this.moveToSlide(currentSlide, this.slidesArray[0])
        }
    }

    moveToPrevSlide() {
        const currentSlide = <HTMLDivElement>this.getCurrentSlide()
        const prevSlide = <HTMLDivElement>currentSlide.previousElementSibling

        if (prevSlide) {
            this.moveToSlide(currentSlide, prevSlide)
        } else {
            this.moveToSlide(currentSlide, this.slidesArray.at(-1))
        }
    }
}

export default Carousel