export type BeerType = 'ale' | 'lager' | 'malt' | 'stout'

export type BeerStyle =
  'amber' |
  'blonde' |
  'brown' |
  'cream' |
  'dark' |
  'pale' |
  'strong' |
  'wheat' |
  'red' |
  'india_pale_ale' |
  'lime' |
  'pilsner' |
  'golden' |
  'fruit' |
  'honey'

export type Comment = {
  author: string,
  content: string,
}

export type Beer = {
  id: number,
  name: string,
  description: string,
  type: BeerType,
  style: BeerStyle,
  producer: string,
  region: string,
  country: string,
  year: string,
  priceEUR: number,
  alcohol_percentage: number,
  images: string[],
  comments: Comment[],
}
