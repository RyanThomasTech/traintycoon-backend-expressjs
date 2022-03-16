import express from 'express';
import { stationsPage, addStation, deleteStation, updateStation } from '../controllers/stationsController.js';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).render('index', { title: 'Train Tycoon' });
});

router.get('/stations', stationsPage);
router.post('/stations',addStation);
router.delete('/stations',deleteStation);
router.put('/stations',updateStation);

export default router;
