import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_request: Request, response: Response) => {
  response.json({ message: 'Get competitive leaderboard' });
});

router.get('/team/:teamId', (request: Request, response: Response) => {
  response.json({ message: `Get team leaderboard for ${request.params.teamId}` });
});

router.get('/user/:userId', (request: Request, response: Response) => {
  response.json({ message: `Get user leaderboard position for ${request.params.userId}` });
});

export default router;
