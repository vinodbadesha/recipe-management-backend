const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotEnv = require("dotenv")
const recipeRoutes = require("./routes/recipeRoutes")

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

dotEnv.config()
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected successfully")
})
.catch((error) => {
    console.log(`${error}`)
})

app.use("/recipes", recipeRoutes)

const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log(`Server started and running successfully at port ${port}`)
})