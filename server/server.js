import express from 'express'

const app = express()

// middleware function to serve static files from the client/public folder
app.use('/public', express.static('./public'))

// middleware function to serve static files from the client/public/scripts folder
app.use('/scripts', express.static('./public/scripts'))

// define a route for the root URL
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})