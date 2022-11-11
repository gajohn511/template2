import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

app.get('/api', (_req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listing on port ${port}`);
});

export default app;