import * as express from 'express';
import routes from './routes';
import { json } from 'body-parser';
import * as cors from 'cors';

const app = express(),
      port = process.env.PORT || 3000;

app.listen(port);
app.use(cors());
app.use(json());
app.use('/api', routes);

console.log('Ejemplo de una API RESTful. Escuchando en: ' + port);
