const dotenv = require('dotenv').config()

const mode = process.env.MODE || 'development'

export default {
  corsOptions: {
    origin: mode === 'development' ? `http://localhost:3000` : `https://my-beer-app-2019.herokuapp.com/`,
    optionsSuccessStatus: 200,
  },
  jsonServerPort: `http://localhost:3004`,
}
