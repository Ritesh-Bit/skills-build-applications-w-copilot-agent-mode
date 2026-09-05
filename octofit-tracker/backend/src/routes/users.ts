import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_request: Request, response: Response) => {
  response.json({ message: 'Get all users' });
});

router.post('/', (_request: Request, response: Response) => {
  response.status(201).json({ message: 'Create user' });
});

router.get('/:id', (request: Request, response: Response) => {
  response.json({ message: `Get user ${request.params.id}` });
});

router.put('/:id', (request: Request, response: Response) => {
  response.json({ message: `Update user ${request.params.id}` });
});

router.delete('/:id', (request: Request, response: Response) => {
  response.json({ message: `Delete user ${request.params.id}` });
});

export default router;
