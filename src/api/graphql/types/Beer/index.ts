export default `
  type Beer {
    id: Int
    name: String
    description: String
    type: String
    style: String
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
    type: [String]
    style: [String]
    region: [String]
    country: [String]
    producer: [String]
    year: [String]
    priceEUR: [Int]
    alcohol_percentage: [Float]
  }

  input AddBeerInput {
    name: String
    description: String
    type: String
    style: String
    producer: String
    region: String
    country: String
    year: String
    priceEUR: Float
    alcohol_percentage: Int
    images: [String]
    comments: [IComment]
  }
`
