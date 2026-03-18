import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import {WindowControls} from "#components";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>
            </div>
            <div className="p-5 space-y-5">
                <img src="/images/adel.jpg"
                     alt="adel"
                     className="w-20 rounded-full"
                />
                <h3>Let Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk tech</p>
                <a className="text-blue-500 underline" href="mailto:adelotman1987@gmail.com">adelotman1987@gmail.com</a>
                <ul>
                    {socials.map(({id,bg,link, icon,text})=>(
                        <li key={id} style={{backgroundColor:bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
const ContactWindow = WindowWrapper(Contact,"contact");
export default ContactWindow
