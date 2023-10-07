import { pool } from '../config/database.js'
import '../config/dotenv.js'
import locationData from '../data/locations.js'

const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      pricePoint VARCHAR(10) NOT NULL,
      audience VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      submittedBy VARCHAR(255) NOT NULL,
      submittedOn TIMESTAMP NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 locations table created successfully')
  } catch (err) {
    console.error('⚠️ error creating locations table', err)
  }
}

const seedLocationsTable = async () => {
  await createLocationsTable()

  locationData.forEach((location) => {
    const insertQuery = {
      text: 'INSERT INTO locations (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    }

    const values = [
      location.name,
      location.pricePoint,
      location.audience,
      location.image,
      location.description,
      location.submittedBy,
      location.submittedOn
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting location', err)
        return
      }
      console.log(`✅ ${location.name} added successfully`)
    })
  })
}

seedLocationsTable()
