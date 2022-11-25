import express, { Request, Response } from 'express';
import morgan from 'morgan';

const app = express();
const port = 5000;

app.use(morgan('dev'));

app.get('/api', (_req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}\n`);
});

export default app;
