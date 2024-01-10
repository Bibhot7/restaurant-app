import express from "express";

import { sendReservation } from "../controller/reservation.js";
import { cancelReservation } from "../controller/reservation.js";

import { getAllReservations } from "../controller/reservation.js";







const router = express.Router();
router.get("/", getAllReservations);
router.post("/send", sendReservation);
router.post("/cancel", cancelReservation); 





export default router;
