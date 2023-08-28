import {useParams} from "react-router-dom";

export default function ProjectSlug() {
    const {slug} = useParams()

    const PROJECTS = [
        {
            id: 1,
            name: "Webmaster Sage-femme",
            slug: "emilie-canaud-sage-femme",
            img: "canaud-emilie-sage-femme.fr_.png",
            desc: "Création du site/design pour une sage-femme basé sur Troyes."
        },
        {
            id: 2,
            name: "Institut de Médecine du Sport",
            slug: "institut-de-medecine-du-sport",
            img: "ims3.png",
            desc: "Pendant mon stage d'un mois lors de ma première année en BTS SIO SLAM, j'ai eu l'opportunité de contribuer à la conception et à la refonte du site web de l'Institut de Médecine du Sport de Troyes."
        }
    ]

    const project= PROJECTS.find(project => project.slug === slug)

    return (
        <div className="container mx-auto pb-[40px]">
            <h1 className="text-5xl font-medium mb-2 w-full">
                {project.name}
            </h1>
            <div>
                <img src={`/${project.img}`} alt=""/>
            </div>
        </div>
    )
}