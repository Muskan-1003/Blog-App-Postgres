require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const pool = require('./db/conn');
const multer = require('multer');
const helmet = require('helmet');
const cors=require('cors');



app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('uploads',express.static('uploads'))
// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// Home route
app.get('/', (req, res) => {
  res.json({ "message": 'hello' });
});

// Get all blogs
app.get('/blog/:cat', async (req, res) => {
  try {
    const result = await pool.query(
      req.params.cat != 'all'?`SELECT * FROM blogs where category='${req.params.cat}'`: 'SELECT * FROM blogs');
    res.json({ "data": result.rows });
  } catch (err) {
    console.error('Query error', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/blogbyid/:id', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM blogs where id=${req.params.id}`);
    res.json({ "data": result.rows });
  } catch (err) {
    console.error('Query error', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new blog
app.post('/blog', async (req, res) => {
  try {
    const { title, images, post ,category} = req.body;
    const result = await pool.query(
      'INSERT INTO blogs (title, images, post,category) VALUES ($1, $2, $3,$4) RETURNING *',
      [title, images, post,category]
    );
    res.json({ "message": "Added new blog", "blog": result.rows[0] });
  } catch (err) {
    console.error('Query error', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Upload blog image
app.post('/blogimage', upload.single('file'), (req, res) => {
  try {
    res.json(req.file);
  } catch (err) {
    console.error('File upload error', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
