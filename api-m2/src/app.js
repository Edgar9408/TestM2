import express, { json } from "express";
import morgan from "morgan";
import cors from 'cors';
const app = express();

//import Routes
import publicationRoutes from './routes/publications';

// helmet
var helmet = require('helmet');
app.use(helmet());

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded());
app.use(json());
app.use(cors());

//Routes
app.use('/api/publications', publicationRoutes);

export default app;