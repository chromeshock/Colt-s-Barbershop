import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import gallery1 from './images/gallery1.jpg';
import gallery2 from './images/gallery2.jpg';
import demoya1 from './images/demoya1.jpg';
import demoya2 from './images/demoya2.jpg';
import gallery7 from './images/gallery7.jpg';

function Gallery() {
  const images = [
    {
      original: gallery1,
      thumbnail: gallery1,
    },
    {
      original: gallery2,
      thumbnail: gallery2,
    },
    {
      original: demoya1,
      thumbnail: demoya1,
    },
    {
      original: demoya2,
      thumbnail: demoya2,
    },
    {
      original: gallery7,
      thumbnail: gallery7,
    },
   ];
  
    return (
      <div>
        <h2>Gallery</h2>
        <div className='gallery-img'>
          <ImageGallery items={images} />
        </div>
      </div>
    );
  }

export default Gallery;