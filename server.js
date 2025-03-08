const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())

const bodyParser = require("body-parser")
const mongoose = require("mongoose")
app.use(bodyParser.json())

const recipeRoutes = require("./routes/recipeRoutes")

const dotEnv = require("dotenv")
dotEnv.config()
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected successfully")
})
.catch((error) => {
    console.log(`${error}`)
})

app.use(cors())

app.use("/recipes", recipeRoutes)

const port = process.env.port || 6000

app.listen(port, () => {
    console.log(`Server started and running successfully at port ${port}`)
})