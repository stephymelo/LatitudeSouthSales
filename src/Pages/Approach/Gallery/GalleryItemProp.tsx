import * as React from 'react';
import {GalleryItem} from "../../../Types/GalleryItem"

export type GalleryItemProp = GalleryItem & {
}



export const GalleryItemProp: React.FC<GalleryItemProp> = ({image,description}) => {
    return (
<li className="gallery-item">
      <img src={image} alt={description} className="gallery-img" />
    </li>
);
}