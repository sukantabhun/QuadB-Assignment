import express from 'express';
import axios from 'axios';
import connectToMongo from './database/connect.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

async function fetchData() {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const data = Object.values(response.data).slice(0, 10);
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return [];
  }
}

async function updateOrInsertDataIntoMongo(data) {
  const db = await connectToMongo();
  const collection = db.collection('market_data');

  try {
    for (const item of data) {
      const query = { name: item.name };
      const update = {
        $set: {
          last: item.last,
          buy: item.buy,
          sell: item.sell,
          volume: item.volume,
          base_unit: item.base_unit,
        },
      };
      await collection.updateOne(query, update, { upsert: true });
    }
    console.log('Data upserted into MongoDB');
  } catch (error) {
    console.error('Error upserting data into MongoDB:', error);
  }
}

setInterval(async () => {
  const data = await fetchData();

  if (data.length > 0) {
    console.log('fetched')
    await updateOrInsertDataIntoMongo(data);
  }
}, 60* 1000);

app.get('/api/getTop10', async (req, res) => {
  const db = await connectToMongo();
  const collection = db.collection('market_data');

  try {
    const marketData = await collection.find({}).toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(marketData);
  } catch (error) {
    console.error('Error retrieving data from MongoDB:', error);
    res.status(500).send({ message: 'Error retrieving data' });
  } finally {
    await db.client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
