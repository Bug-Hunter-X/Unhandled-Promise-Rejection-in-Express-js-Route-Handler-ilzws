const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(async () => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Simulate a successful response
        res.send('Success!');
      } else {
        // Simulate an error and handle it
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));