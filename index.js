const express = require('express');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/articleRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/myarticlesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});


app.use(express.json());
app.use('/articles', articleRoutes);




const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



