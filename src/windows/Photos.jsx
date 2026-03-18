import { Mail, Search } from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx"; // ✅ fixed casing

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery image",
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img,
                                    })
                                }
                                className="cursor-pointer hover:scale-105 transition" // ✅ UX fix
                            >
                                <img
                                    src={img}
                                    alt={`Gallery image ${id}`}
                                    loading="lazy" // ✅ performance
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos"); // ✅ consistent key
export default PhotosWindow;