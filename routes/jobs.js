const express = require('express');
const router = express.Router();

router.get('/', (rew, res) => res.send('JOBS'));

module.exports = router;