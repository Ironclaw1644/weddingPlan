// Real wedding photography from the current site, reused by the homepage gallery
// and the full portfolio page. Order leads with the strongest images.
import type { ImageMetadata } from 'astro';

import ceremonyAerial from '../assets/hero-lakeside-ceremony.jpg';
import decorFrame from '../assets/portrait.jpg';
import g01 from '../assets/gallery/g01.jpg';
import g02 from '../assets/gallery/g02.jpg';
import g03 from '../assets/gallery/g03.jpg';
import g04 from '../assets/gallery/g04.jpg';
import g05 from '../assets/gallery/g05.jpg';
import g06 from '../assets/gallery/g06.jpg';
import g07 from '../assets/gallery/g07.jpg';
import g08 from '../assets/gallery/g08.jpg';
import g09 from '../assets/gallery/g09.jpg';
import g11 from '../assets/gallery/g11.jpg';
import g12 from '../assets/gallery/g12.jpg';

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: g07, alt: 'Lakeside wedding ceremony pavilion with a cross and a petal-lined aisle' },
  { src: g04, alt: 'A father walks the bride down the aisle under a draped wooden arch' },
  { src: g06, alt: 'Bride and groom on a tree-lined path at golden hour' },
  { src: g05, alt: 'A flower girl in a lace dress holding a basket of petals' },
  { src: g01, alt: 'The bridal party in matching robes before the ceremony' },
  { src: g03, alt: 'The bride pausing by a sunlit window before walking down the aisle' },
  { src: g08, alt: 'The bride and her mother sharing a quiet moment before the wedding' },
  { src: g12, alt: 'A “Love is Patient” sign tied with tulle at the ceremony' },
  { src: g11, alt: 'An outdoor wedding ceremony beside the lake' },
  { src: ceremonyAerial, alt: 'An outdoor lakeside wedding ceremony from above' },
  { src: g02, alt: 'The bridal party laughing together while getting ready' },
  { src: decorFrame, alt: 'A draped frame and soft fabric ceremony backdrop detail' },
  { src: g09, alt: 'Bride and groom on the dock by the lake at dusk' },
];
