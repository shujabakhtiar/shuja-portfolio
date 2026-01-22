import delyticsImage from '@/assets/projectGallery/delytics.mov'
import sandyImage from '@/assets/projectGallery/sandy.mov'

export const projects = [
    {
        slug: "delytics",
        title: "Delytics",
        description: "A platform for delivery analytics and insights.",
        tags: ["Nuxt js", "Prisma", "PostgreSQL"],
        liveSite: "https://delytics.com",
        imageColor: "bg-blue-500",
        image: delyticsImage,
    },
    {
        slug: "sandy-said-so",
        title: "Sandy",
        description: "A Card game app to play with friends, using personal experiences.",
        tags: ["Nuxt js", "Prisma", "PostgreSQL"],
        liveSite: "https://sandysaidso.app",
        imageColor: "bg-green-500",
        image: sandyImage,
    },
];
