import isEmail from "validator/lib/isEmail.js";
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";




export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    return next(error);
  }
};
export const cancelReservation = async (req, res) => {
  const { email } = req.body;

  try {
    const canceledReservation = await Reservation.findOneAndDelete({ email });
    if (!canceledReservation) {
      return res.status(404).json({ message: "Reservation not found." });
    }

    return res.status(200).json({ message: "Reservation canceled successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Error canceling reservation.", error: error.message });
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find(); // Fetch all reservations
    res.status(200).json({ success: true, data: reservations });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error fetching reservations" });
  }
};
