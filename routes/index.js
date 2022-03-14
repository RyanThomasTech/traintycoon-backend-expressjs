import express from 'express';
import { stationsPage, addStation } from '../controllers/stationsController.js';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).render('index', { title: 'Express' });
});

router.get('/stations', stationsPage);
router.post('/stations',addStation);

export default router;
