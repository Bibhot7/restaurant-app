import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AdminContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

const ReservationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ReservationCard = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReservationInfo = styled.div`
  margin-top: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span``;

const Admin = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/reservation");
        setReservations(response.data.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  return (<section className="notFound">
    <AdminContainer>
      <h1>Reservation Data</h1>
      <ReservationList>
        {reservations.map((reservation) => (
          <ReservationCard key={reservation._id}>
            <ReservationInfo>
              <Label>First Name:</Label>
              <Value>{reservation.firstName}</Value>
            </ReservationInfo>
            <ReservationInfo>
              <Label>Last Name:</Label>
              <Value>{reservation.lastName}</Value>
            </ReservationInfo>
            <ReservationInfo>
              <Label>Email:</Label>
              <Value>{reservation.email}</Value>
            </ReservationInfo>
            <ReservationInfo>
              <Label>Date:</Label>
              <Value>{reservation.date}</Value>
            </ReservationInfo>
            <ReservationInfo>
              <Label>Time:</Label>
              <Value>{reservation.time}</Value>
            </ReservationInfo>
          </ReservationCard>
        ))}
      </ReservationList>
    </AdminContainer>
    </section>
  );
};


export default Admin;

