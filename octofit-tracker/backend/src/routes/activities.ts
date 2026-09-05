import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_request: Request, response: Response) => {
  response.json({ message: 'Get all activities' });
});

router.post('/', (_request: Request, response: Response) => {
  response.status(201).json({ message: 'Log new activity' });
});

router.get('/:id', (request: Request, response: Response) => {
  response.json({ message: `Get activity ${request.params.id}` });
});

router.put('/:id', (request: Request, response: Response) => {
  response.json({ message: `Update activity ${request.params.id}` });
});

router.delete('/:id', (request: Request, response: Response) => {
  response.json({ message: `Delete activity ${request.params.id}` });
});

export default router;
