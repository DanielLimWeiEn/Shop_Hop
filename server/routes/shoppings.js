import express from 'express';
import { showShopping, generateShopping } from '../controllers/shopping.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Call back function.
router.get('/', auth, showShopping);
router.post('/search', auth, generateShopping);

export default router;