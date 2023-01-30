import { CarouselInput } from "./type";
import CarouselV3 from "./carouselV3";

class CarouselV4 extends CarouselV3 {
    timer: ReturnType<typeof setTimeout>

    constructor(content: CarouselInput[], target: string) {
        super(content, target)
        this.timer = this.carouselTimer()
    }

    carouselTimer() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.moveToNextSlide()
        }, 10000)
        return this.timer
    }

    moveToNextSlide() {
        super.moveToNextSlide()
        this.carouselTimer()
    }
}

export default CarouselV4