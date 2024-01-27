import express from 'express';
import cors from 'cors';
import fs from "fs";
import path from 'path';
import { join } from 'path';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const port = 3000;


app.get('/getJsonFile', (req, res) => {
  // Specify the path to your JSON file
  const filePath = join(process.cwd(), 'shit', 'msg.json');

  // Read the file using fs
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
          return;
      }

      // Parse the JSON data
      const jsonData = JSON.parse(data);

      // Send the JSON data in the response
      res.json(jsonData);
  });
});

app.get('/', (req, res) => {
  console.log("LOG");
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
