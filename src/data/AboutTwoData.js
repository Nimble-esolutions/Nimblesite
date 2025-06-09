import bg from '@/assets/images/shapes/about-bg-1.jpg'
import shape from '@/assets/images/shapes/about-2-shape-1.png'

import contImage from '@/assets/images/resources/about-2-1.png'
import contShape from '@/assets/images/shapes/about-2-shape-2.png'
import image1 from '@/assets/images/resources/about-2-1.jpg'
import image2 from '@/assets/images/resources/about-2-1.jpg'
const aboutTwoData = {
    bg,
    shape, image1, image2,

    tagLine: "We Believe",
    title: "Your challenges are our \n creative opportunities",
    text: "In our solution-based approach we translate your unique business processes into functionality. These tailor-made applications has proven to be the most efficient tools mainly because:",


    count: "1283",
    tabItems: [
        {
            id: 1,
            title: "Mission"
        },
        {
            id: 2,
            title: "Support"
        },
        {
            id: 3,
            title: "Service"
        }
    ],
    tabContents: [
        {
            id: 1,
            image: contImage,
            shape: contShape,
            lists: ["1.	They address pain-areas", "2. Readily used by the end-users", "3. Increase efficiency"

            ],

        },
        {
            id: 2,
            image: contImage,
            shape: contShape,
            lists: ["Business onstructivism.", "We give management", "Media in this solution."

            ],

        },
        {
            id: 3,
            image: contImage,
            shape: contShape,
            lists: ["Business onstructivism.", "We give management", "Media in this solution."

            ],

        }
    ]




}
export default aboutTwoData;
