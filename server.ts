import express from "express";
const app = express()
import path from 'path';
const PORT = process.env.PORT || 3500

app.use("/", express.static(path.join(__dirname, '/public')))

app.use("/", require("./routes/root"))

app.listen(PORT, () =>  console.log(`Server running on port ${PORT}`))