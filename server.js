const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve Hugo’s output folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback: serve index.html for any route (so pretty URLs work)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
