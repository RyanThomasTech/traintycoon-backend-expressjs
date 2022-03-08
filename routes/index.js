import express from 'express';
import { stationsPage } from '../controllers/stationsController.js';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).render('index', { title: 'Express' });
});

router.get('/stations', stationsPage);

export default router;
