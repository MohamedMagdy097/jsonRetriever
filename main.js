import express from 'express';
import cors from 'cors';
import path from 'path';
// import fs from "fs";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const port = 3000;

app.get('/pls', (req, res) => {
  // Specify the path to your JSON file
  const filePath = path.join(__dirname, 'shit', 'msg.json');

  // Send the JSON file in the response
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
