// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from Render CI/CD!'));

app.get('/health', (req, res) => res.status(200).send('Ok'));

app.use((req, res) => {
  res.status(404).send('Oops! Page Not Found.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
