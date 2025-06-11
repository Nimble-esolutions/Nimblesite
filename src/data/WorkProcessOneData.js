import bg from '@/assets/images/shapes/work-process-bg-1.png'
import itemBg from '@/assets/images/resources/work-process-1-bg.jpg'

import itemImage1 from '@/assets/images/resources/work-process-1.jpg'
import itemImage2 from '@/assets/images/resources/work-process-2.jpg'
import itemImage3 from '@/assets/images/resources/work-process-3.jpg'
import itemImage4 from '@/assets/images/resources/work-process-4.jpg'
import itemImage5 from '@/assets/images/resources/work-process-5.jpg'
import itemImage6 from '@/assets/images/resources/work-process-5.jpg'

const workProcessOneData = {
    bg,
    tagLine: "Our Working process",
    title: "Process Method Value Company",
    carouselData: [
        {
            id: 1,
            bg: itemBg,
            image: itemImage1,
            title: "Requirement Mapping",
            text: "An utmost important stage.",
            href: "about"

        },
        {
            id: 2,
            bg: itemBg,
            image: itemImage2,
            title: "Presenting the solution",
            text: "UI team creates mock Interface",
            href: "about"

        },
        {
            id: 3,
            bg: itemBg,
            image: itemImage3,
            title: "Development stage",
            text: "Development starts",
            href: "about"

        },
        {
            id: 4,
            bg: itemBg,
            image: itemImage4,
            title: "The moment of truth",
            text: "Testing for accuracy",
            href: "about"

        },
        {
            id: 5,
            bg: itemBg,
            image: itemImage5,
            title: "Production Launch ",
            text: "A smooth transition",
            href: "about"

        },
        {
            id: 6,
            bg: itemBg,
            image: itemImage6,
            title: "Hand Holding",
            text: "The timely help is our specialty",
            href: "about"

        }
    ]

}
export default workProcessOneData;