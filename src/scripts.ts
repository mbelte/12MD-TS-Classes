import Carousel from "./carousel";
import CarouselV2 from "./carouselV2";


const images = [
    {
        img: 'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/international-black-cat-awareness-month-e1575287719521.jpg',
        title: 'some title'
    },
    {
        img: 'https://paradepets.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg',
        title: 'second title'
    },
    {
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
        title: 'third title'
    }
]

const carousel = new Carousel(images, '.carousel-placeholder')

const carouselV2 = new CarouselV2(images, '.carousel-placeholder-v2')