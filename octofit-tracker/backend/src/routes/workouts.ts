import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_request: Request, response: Response) => {
  response.json({ message: 'Get personalized workout suggestions' });
});

router.post('/', (_request: Request, response: Response) => {
  response.status(201).json({ message: 'Create new workout' });
});

router.get('/:id', (request: Request, response: Response) => {
  response.json({ message: `Get workout ${request.params.id}` });
});

router.put('/:id', (request: Request, response: Response) => {
  response.json({ message: `Update workout ${request.params.id}` });
});

router.delete('/:id', (request: Request, response: Response) => {
  response.json({ message: `Delete workout ${request.params.id}` });
});

export default router;
