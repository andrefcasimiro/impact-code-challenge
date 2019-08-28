import header_img from './header_img.jpeg'

type Credit = {
  image: string,
  source: string,
  author: string,
  author_page: string,
}

export const image_credits: Credit[] = [
  {
    image: header_img,
    source: 'https://unsplash.com/photos/aF1NPSnDQLw',
    author: 'Kym Ellis',
    author_page: 'https://unsplash.com/@kymellis',
  },
]
