import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Gets all the Users');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Gets the Users with ID: ${id}`);
});

router.post('/', (req, res) => {
    res.send('Creates a new Users');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Edits the User with ID: ${id}`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Deletes the User with ID: ${id}`);
});

export default router;