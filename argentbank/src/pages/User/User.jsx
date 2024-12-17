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
    <>
      {/* Barre de navigation */}
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./user.html">
            <i className="fa fa-user-circle"></i>
            Tony
          </a>
          <a className="main-nav-item" href="./index.html">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      </nav>
  
      {/* Contenu principal */}
      <main className="main bg-dark">
        {/* En-tête utilisateur */}
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
  
        {/* Détails utilisateur */}
        <section className="user-details">
          <p>
            {/* <strong>Full Name:</strong> {user.firstName} {user.lastName} */}
          </p>
          <p>
            {/* <strong>Email:</strong> {user.email} */}
          </p>
        </section>
  
        {/* Transactions */}
        <section>
          <Transaction title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
          <Transaction title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
          <Transaction title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Available Balance" />
        </section>
      </main>
    </>
  );
  
}