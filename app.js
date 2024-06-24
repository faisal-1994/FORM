const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const app = express();
const apiRoutes = require('./routes/api');

app.use(cors({ origin: 'https://siddiq.my.id/form2' }));

// MongoDB connection
mongoose.connect('mongodb+srv://faisal:faisal1994@cluster0.981m0ts.mongodb.net/FORM?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1', apiRoutes);

// Serve HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
