import {useParams} from "react-router-dom";

export default function ProjectSlug() {
    const {slug} = useParams()

    return (
        <div className="container mx-auto">
            <p className="text-xl font-medium">
                {slug}
            </p>
        </div>
    )
}