import header_img from './header_img.jpeg'
import search_bar_img from './search_bar_img.jpeg'
import ExternalLink from '../svg/ExternalLink'

type Credit = {
  image: string | any,
  source: string,
  author: string,
  author_page: string,
}

export const image_credits: Credit[] = [
  {
    image: header_img,
    source: 'https://unsplash.com/photos/-3W4bwHiQRc',
    author: 'Kaley Dykstra',
    author_page: 'https://unsplash.com/@kaleyloved',
  },
  {
    image: search_bar_img,
    source: 'https://unsplash.com/photos/UFPg3gqfPhw',
    author: 'Andy Lee',
    author_page: 'https://unsplash.com/@aperture_andy',
  },
  {
    image: ExternalLink,
    source: 'https://fontawesome.com/icons/external-link-alt?style=solid',
    author: 'Font Awesome',
    author_page: 'https://fontawesome.com',
  },
]
