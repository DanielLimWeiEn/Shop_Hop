import express from 'express';
import { showShopping } from '../controllers/shopping.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Call back function.
router.get('/', auth, showShopping);

export default router;