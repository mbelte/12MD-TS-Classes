import { CarouselInput } from "./type";
import CarouselV2 from "./carouselV2";

class CarouselV3 extends CarouselV2 {
    thumbsList: HTMLUListElement;
    thumbItem: HTMLLIElement;
    thumbImg: HTMLImageElement;


    constructor(content: CarouselInput[], target: string) {
        super(content, target)

        this.createThumbsList()
        this.appendThumbs(content)
    }

    createThumbsList() {
        this.thumbsList = document.createElement('ul')
        this.carousel.insertBefore(this.thumbsList, this.dotNav)
        this.thumbsList.classList.add('carousel__thumbnails')
    }

    createThumbItem() {
        this.thumbItem = document.createElement('li')
        this.thumbsList.appendChild(this.thumbItem)
        this.thumbItem.classList.add('carousel__thumb-item')

        return this.thumbItem
    }

    appendThumbs(content: CarouselInput[]) {
        content.forEach(({img, title}, index) => {
            const thumb = this.createThumbItem()            
            this.createImage(thumb, img, title)
        })
    }
}

export default CarouselV3