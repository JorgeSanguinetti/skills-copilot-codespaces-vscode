// Create web server
// Start server
// Serve static files
// Routing
// Serve dynamic files
// Serve API
// Create a new comment
// Get all comments
// Get a comment by id
// Update a comment
// Delete a comment
// Error handling

// 1. Create web server
const express = require('express');
const app = express();

// 2. Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 3. Serve static files
app.use(express.static('public'));

// 4. Routing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 5. Serve dynamic files
app.get('/about', (req, res) => {
  res.send('This is about page');
});

// 6. Serve API
app.get('/api', (req, res) => {
  res.json({ message: 'Hello API' });
});

// 7. Create a new comment
app.post('/api/comments', (req, res) => {
  res.json({ message: 'Create a new comment' });
});

// 8. Get all comments
app.get('/api/comments', (req, res) => {
  res.json({ message: 'Get all comments' });
});

// 9. Get a comment by id
app.get('/api/comments/:id', (req, res) => {
  res.json({ message: 'Get a comment by id' });
});

// 10. Update a comment
app.put('/api/comments/:id', (req, res) => {
  res.json({ message: 'Update a comment' });
});

// 11. Delete a comment
app.delete('/api/comments/:id', (req, res) => {
  res.json({ message: 'Delete a comment' });
});

// 12. Error handling
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});