// import Cards from "@/components/Cards.jsx";

import {Link} from "react-router-dom";

export default function Project() {
    // const projects = [
    //     {id: 1, name: "La boite à dev (2014)", slug: "la-boite-a-dev", img: "canaud-emilie-sage-femme.fr_.png", lang: "React, TailwindCSS"},
    //     {id: 2, name: "Portfolio", slug: "portfolio", img: "ims.jpg", lang: "React"},
    //     {id: 3, name: "Safer", slug: "safer-app", img: "ims2.jpg", lang: "React Native, TailwindCSS"},
    //     {id: 4, name: "Test", slug: "test-app", img: "logo.png", lang: "C#"},
    //     {id: 5, name: "Portfolio", slug: "portfolio", img: "ims.jpg", lang: "React"},
    //     {id: 6, name: "Safer", slug: "safer-app", img: "ims2.jpg", lang: "React Native, TailwindCSS"},
    //     {id: 7, name: "Test", slug: "test-app", img: "logo.png", lang: "C#"},
    //     {id: 8, name: "Safer", slug: "safer-app", img: "ims2.jpg", lang: "React Native, TailwindCSS"},
    //     {id: 9, name: "Portfolio", slug: "portfolio", img: "ims.jpg", lang: "React"},
    //     {id: 10, name: "Safer", slug: "safer-app", img: "ims2.jpg", lang: "React Native, TailwindCSS"},
    //     {id: 11, name: "Test", slug: "test-app", img: "logo.png", lang: "C#"},
    //     {id: 12, name: "Safer", slug: "safer-app", img: "ims2.jpg", lang: "React Native, TailwindCSS"},
    //     {id: 13, name: "Test", slug: "test-app", img: "logo.png", lang: "C#"},
    // ]

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
    return (
        // <div className="flex flex-col gap-4 p-4 text-white md:flex-row md:overflow-hidden md:overflow-x-auto barre md:max-w-full md:rounded-t-3xl">
        //     {/*.reverse() to reverse the array of objects "projects"*/}
        //     {projects.map(project => (
        //         <Cards key={project.id} projet={project.name} slug={project.slug} img={project.img} lang={project.lang}/>
        //     ))}
        // </div>
        <div className="flex flex-col gap-10 container mx-auto pb-[40px]">
            <h1 className="text-5xl font-black py-6">
                Discover my projects
            </h1>

            {PROJECTS.reverse().map(project => (
                <div className="flex flex-col border-t border-slate-700 my-2 lg:flex-row overflow-hidden"
                     key={project.id}>
                    <div className="lg:max-h-80">
                        <img src={`./${project.img}`} alt=""
                             className="max-w-full lg:max-h-fit lg:max-w-2xl h-fit object-cover"/>
                    </div>

                    <div className="p-2">
                        <h1 className="text-5xl font-medium mb-2 w-full">
                            {project.name}
                        </h1>
                        <p className="max-w-5xl">
                            {project.desc}
                        </p>
                        <Link to={`/project/${project.slug}`}
                           className="inline-block w-fit py-2 px-4 mt-5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 hover:transition">
                            See project
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}