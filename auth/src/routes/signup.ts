import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Invalid email.'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage(
        'Invalid password. Password must be within 4 and 20 characters.'
      ),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    const { email, password } = req.body;
    console.log('Creating a user...');
    res.send({});
  }
);

export { router as signupRouter };
