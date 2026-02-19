import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Загрузка данных
const dataPath = path.join(__dirname, 'data', 'products.json');
const readData = () => JSON.parse(fs.readFileSync(dataPath));

// Роут получения товаров
app.get('/api/products', (req, res) => {
  const products = readData();
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});