import {Link, useLocation} from "react-router-dom";
import PropTypes from "prop-types";

// TODO : Verifier les params dans le lien pour modifier le CSS (True : BG WHITE ? BG BLACK & TEXT-WHITE)

export default function ButtonLink({name, slug}) {

    const location = useLocation();

    // Vérifiez si l'URL correspond au slug de ce bouton
    const isActive = location.pathname === `/${slug}`;
    if (isActive) {
        return (
            <Link to={`/${slug}`} className="flex flex-col items-center transition-all py-[0.5rem] px-[1rem] uppercase font-black bg-white text-black rounded-full text-xs">
                {/*<Home className="w-[40px] h-[40px]"/>*/}
                <span className="text-center">{name}</span>
            </Link>
        )
    } else {
        return (
            <Link to={`/${slug}`} className="flex flex-col items-center transition-all py-[0.5rem] px-[1rem] uppercase font-black bg-stone-800 text-white rounded-full text-xs">
                {/*<Home className="w-[40px] h-[40px]"/>*/}
                <span className="text-center">{name}</span>
            </Link>
        )
    }

    // return (
    //     <Link to={`/${slug}`} className="flex flex-col items-center gap-0.5 transition py-[0.5em] px-[1em] uppercase font-black bg-white text-black rounded-full text-xs">
    //         {/*<Home className="w-[40px] h-[40px]"/>*/}
    //         <span className="text-center">{name}</span>
    //     </Link>
    // )
}

ButtonLink.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};