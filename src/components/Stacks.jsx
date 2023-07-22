import './Stacks.css'
import {Code} from "lucide-react";
function Stacks() {
    return (
        <section className="stacks" id="stacks">
            <h1>
                <Code />
                Tools & Langages</h1>
            <article>
                <div>
                    <h4>Technologies</h4>
                    <div className="item-stacks">
                        <span>Git 2021</span>
                        <span>VueJS 2023</span>
                        <span>ReactJS 2023</span>
                        <span>Svelte SOON 2023</span>
                    </div>
                </div>
                <div>
                    <h4>Langages</h4>
                    <div className="item-stacks">
                        <span>Python 2020</span>
                        <span>SCSS 2021</span>
                        <span>JavaScript 2021</span>
                        <span>PHP 2022</span>
                    </div>
                </div>
                <div>
                    <h4>Éditeurs</h4>
                    <div className="item-stacks">
                        <span>VS Code 2021</span>
                        <span>PyCharm 2021</span>
                        <span>PhpStorm 2022</span>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Stacks