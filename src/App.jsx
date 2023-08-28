import {Routes, Route} from 'react-router-dom';
import Project from '@/pages/Project.jsx';
import Aside from '@/components/Aside.jsx';
import Stats from "@/pages/Stats.jsx";
import Discover from "@/pages/Discover.jsx";
import Stacks from "@/pages/Stacks.jsx";
import ProjectSlug from "@/pages/ProjectSlug.jsx";
import Experience from "@/pages/Experience.jsx";
import Home from "@/pages/Home.jsx";

function App() {
    return (
        <>
            <div className="text-gray-700">
                {/*<div className="p-5">*/}
                {/*    <div className="flex flex-col gap-1 items-center text-center border border-gray-400 rounded-3xl p-4">*/}
                {/*        /!*https://placehold.co/250x375*!/*/}
                {/*        <img src="/logo.png" alt=""*/}
                {/*             className="rounded-lg max-h-[375px]"*/}
                {/*        />*/}

                {/*        <h1 className="text-2xl font-black">*/}
                {/*            Aymeric <span className="text-orange-500">DE LANGE</span>*/}
                {/*        </h1>*/}
                {/*        <h2 className="text-xl font-light mb-1">*/}
                {/*            Frontend developer*/}
                {/*        </h2>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="md:mx-auto m-4 md:m-0 pb-[40px] md:pb-0">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {/*<Route path="/*" element={<Home/>}/>*/}
                        <Route path="/project/:slug" element={<ProjectSlug/>}/>
                        <Route path="/discover" element={<Discover/>}/>
                        <Route path="/project" element={<Project/>}/>
                        <Route path="/stats" element={<Stats/>}/>
                        <Route path="/stacks" element={<Stacks/>}/>
                        <Route path="/experience" element={<Experience/>}/>
                    </Routes>
                </div>

                <footer className="absolute bottom-0 flex items-center">
                    <Aside/>
                </footer>
            </div>
        </>
    );
}

export default App;