const express = require('express');
const app = express();
const connectDB = require('./db')
const cors = require('cors');



const userRoutes = require('./routes/userRoutes');
const animalListingRoutes = require('./routes/animalListingRoutes');

app.use(express.json())
app.use('/api', userRoutes);
app.use('/api', animalListingRoutes);

app.use(cors({
    origin: "http://localhost:3000/api/*"
}));

// app.use('/api', getAllSearch);

connectDB()
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
