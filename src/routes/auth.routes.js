import express from 'express';

const router = express.Router();

router.post('/api/auth/login', (req, res) => {
    res.send('User logged in successfully.');
});

export default router;