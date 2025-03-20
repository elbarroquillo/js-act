const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic route to serve HTML files
app.get('/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'public', filename);
    
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
