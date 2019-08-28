export default `
  enum BeerType {
    ale
    lager
    malt
    stout
  }

  enum BeerStyle {
    amber
    blonde
    brown
    cream
    dark
    pale
    strong
    wheat
    red
    india_pale_ale
    lime
    pilsner
    golden
    fruit
    honey
  }

  type Beer {
    id: Int
    name: String
    description: String
    type: BeerType
    style: BeerStyle
    producer: String
    region: String
    country: String
    year: Int
    priceEUR: Float
    alcohol_percentage: Float
    images: [String]
    comments: [Comment]
  }

  type Query {
    beer(id: Int): Beer
    beers(filter: BeersFilter): [Beer]
  }

  type Mutation {
    addBeer(input: AddBeerInput): Beer
  }

  input BeersFilter {
    name: [String]
    type: [BeerType]
    style: [BeerStyle]
    region: [String]
    country: [String]
    producer: [String]
    year: [Int]
  }

  input AddBeerInput {
    name: String
    description: String
    type: BeerType
    style: BeerStyle
    producer: String
    region: String
    country: String
    year: Int
    priceEUR: Float
    alcohol_percentage: Int
    images: [String]
    comments: [IComment]
  }
`
