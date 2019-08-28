export const formatStyle = (style: string) => {
  switch (style) {
    case 'amber':
      return 'Amber'
    case 'blonde':
      return 'Blonde'
    case 'brown':
      return 'Brown'
    case 'cream':
      return 'Cream'
    case 'dark':
      return 'Dark'
    case 'strong':
      return 'Strong'
    case 'pale':
      return 'Pale'
    case 'wheat':
      return 'Wheat'
    case 'red':
      return 'Red'
    case 'india_pale_ale':
      return 'IPA'
    case 'lime':
      return 'Lime'
    case 'pilsner':
      return 'Pilsner'
    case 'golden':
      return 'Golden'
    case 'fruit':
      return 'Fruit'
    case 'honey':
      return 'Honey'
    default:
      return ''
  }
}

export const formatType = (type: string) => {
  switch (type) {
    case 'ale':
      return 'Ale'
    case 'lager':
      return 'Lager'
    case 'malt':
      return 'Malt'
    case 'stout':
      return 'Stout'
    default:
      return ''
  }
}
