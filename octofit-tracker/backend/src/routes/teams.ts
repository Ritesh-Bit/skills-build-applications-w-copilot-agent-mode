import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_request: Request, response: Response) => {
  response.json({ message: 'Get all teams' });
});

router.post('/', (_request: Request, response: Response) => {
  response.status(201).json({ message: 'Create team' });
});

router.get('/:id', (request: Request, response: Response) => {
  response.json({ message: `Get team ${request.params.id}` });
});

router.put('/:id', (request: Request, response: Response) => {
  response.json({ message: `Update team ${request.params.id}` });
});

router.delete('/:id', (request: Request, response: Response) => {
  response.json({ message: `Delete team ${request.params.id}` });
});

export default router;
