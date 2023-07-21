import './App.css'
import Header from "./components/Header.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Stacks from "@/components/Stacks.jsx";
import Contact from "@/components/Contact.jsx";
import Socials from "@/components/Socials.jsx";

function App() {
    return (
        <>
            <Header/>
            <About/>
            <Projects/>
            <Stacks/>
            <Contact/>
            <Socials/>
        </>
    )
}

export default App


