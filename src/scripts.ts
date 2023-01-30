import Carousel from "./carousel";
import CarouselV2 from "./carouselV2";
import CarouselV3 from "./carouselV3";
import CarouselV4 from "./carouselV4";


const images = [
    {
        img: 'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/international-black-cat-awareness-month-e1575287719521.jpg',
        title: 'cat image'
    },
    {
        img: 'https://paradepets.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg',
        title: 'puppies'
    },
    {
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
        title: 'puppy'
    }
]

const picsum = (qty: number) => {
    const v = Math.round(Math.random() * 100)
    let res = []

    for (let i = v; i < qty + v; i++) {
        res.push(
            {
                img: `https://picsum.photos/id/${ i }/900/500`,
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        )
    }
    return res
}



const carousel = new Carousel(images, '.carousel-placeholder')
const carouselV2 = new CarouselV2(picsum(10), '.carousel-placeholder-v2')
const carouselV3 = new CarouselV3(picsum(10), '.carousel-placeholder-v3')
const carouselV4 = new CarouselV4(picsum(8), '.carousel-placeholder-v4')