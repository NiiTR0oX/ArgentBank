import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./../../Redux/UpdateAccountSlice.js";
import "./user.scss";
import Transaction from "../../components/Account/Transaction.jsx";
import EditName from "../../components/EditName/EditName.jsx";

export default function User() {
  // const dispatch = useDispatch();
  // const { user, loading, error } = useSelector((state) => state.updateAccount);

  // Charger les informations utilisateur lorsque le composant est monté
  // useEffect(() => {
  //   dispatch(fetchUserData());
  // }, [dispatch]);

  // if (loading) {
  //   return <p>Loading user data...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  // if (!user) {
  //   return <p>No user data available.</p>;
  // }

  // rajouter la logique de redux sur le dispatch

  return (
    <main className="main bg-dark">
      <div className="user-header">
        {/* <h1>Welcome back, {user.firstName}!</h1> */}
        {/* <button className="edit-button">Edit Name</button> APPELER EDIT NAME */}
      </div>
      <section className="user-details">
        {/* <EditName /> */}
        <p>
          {/* <strong>Full Name:</strong> {user.firstName} {user.lastName} */}
        </p>
        <p>
          {/* <strong>Email:</strong> {user.email} */}
        </p>
      </section>
      <section>
        {/* Je dois appeler 3x les transaction  */}
        <Transaction title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      </section>
    </main>
  );
}