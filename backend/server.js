import express from 'express';
import orderRoute from './routes/order-route.js'
import cors from 'cors'
import bodyParser from 'body-parser';

const PORT = process.env.PORT | 3001
const RUN_ENV = process.env.NODE_ENV ?? 'development'

const app = express({
  origin: 'http://localhost:3000'
});

app.use(cors());
app.use(bodyParser.json());

app.use('/order', orderRoute)

app.listen(
  PORT,
  console.log(
    `Server running in ${RUN_ENV} mode on port ${PORT}`
  )
)