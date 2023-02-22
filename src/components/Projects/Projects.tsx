import { Link } from "react-router-dom"
import "./projects.scss"

export function Projects() {

    return ( <div id="projects">
            <div>
                <span id="projectsTitle">Projects</span>
            </div>

            <div id="projectsList">
                 <span><Link to="project/1">Finished-Design</Link></span>
                 <span><Link to="project/2">TodoList</Link></span>
                 <span><Link to="project/3">Webshop</Link></span>
            </div>
    </div> )
}