const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/new', (req, res) => {
  res.json({ message: 'New' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
