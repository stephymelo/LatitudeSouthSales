import * as React from 'react';
import { GalleryItemProp } from './GalleryItemProp';
import {GalleryItem} from "../../../Types/GalleryItem"
import photo1 from "../../../Resources/Gallery/1.png"


export type Gallery = GalleryItem & {
}

const [galleryElems, setGalleryElems] = React.useState<GalleryItemProp[]>([
    {
        image: "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=480:*",
        description: "vrene",

    },
    {
        image: "jnverv",
        description: "vrene",

    }

]);


export const Gallery: React.FC<Gallery> = () => {
    return (
        <section className='gallery-container'>
            <ul className="gallery-list">
                {galleryElems.map((elem) => {
                    return <GalleryItemProp
                        image={elem.image}
                        description={elem.description}
                    />;
                })
                }


            </ul>
        </section>
    );
}