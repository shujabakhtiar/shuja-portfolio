import delyticsImage from '@/assets/projectGallery/delytics-l.png'
import sandyImage from '@/assets/projectGallery/sandysaidso.png'

export const projects = [
    {
        slug: "delytics",
        title: "Delytics",
        description: "A platform for delivery analytics and insights.",
        tags: ["Vue js", "Node js", "MongoDB"],
        liveSite: "https://delytics.com",
        imageColor: "bg-blue-500",
        image: delyticsImage,
    },
    {
        slug: "sandy-said-so",
        title: "Sandy",
        description: "A Card game app to play with friends, using personal experiences.",
        tags: ["React js", "Node js", "MongoDB"],
        liveSite: "https://sandysaidso.app",
        imageColor: "bg-green-500",
        image: sandyImage,
    },
];
