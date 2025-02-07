import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./../../Redux/ProfileSlice.js";
import "./user.scss";
import Transaction from "../../components/Account/Transaction.jsx";
import EditName from "../../components/EditName/EditName.jsx";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [displayEditName, setDisplayEditName] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const { token } = useSelector((state) => state.login);
  const navigate = useNavigate();

  // Charger les informations utilisateur lorsque le composant est monté
  useEffect(() => {
    const loadUserData = async () => {
      if (token) {
        const promise = await dispatch(fetchUserData(token));
        if (fetchUserData.fulfilled.match(promise)) {
          setUser(promise.payload);
        } else {
          console.error("Failed to fetch user data:", promise.payload);
        }
      } else {
        navigate("/sign-in");
      }
    };
    loadUserData();
  }, [dispatch, token]);

  // rajouter la logique de redux sur le dispatch
  const handleEditName = () => {
    setDisplayEditName(!displayEditName);
  };

      // tableau de transactions
  const transactions = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Available Balance",
    },
  ];

  // Gestion du chargement ou de l'erreur
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to load user data. Please try again later.</div>;
  }

  return (
    <main className="main bg-dark">
      {/* En-tête utilisateur */}
      <div className="header">
        {(() => {
          if (user) {
            return (
              <>
                <h1>
                  Welcome back
                  <br />
                  {user.firstName} {user.lastName}!
                </h1>
                <button
                  onClick={handleEditName}
                  className="edit-button"
                  disabled={!user}
                >
                  {displayEditName ? "Cancel" : "Edit Name"}
                </button>
              </>
            );
          } else {
            return <h1>Please log in to view your profile</h1>;
          }
        })()}
      </div>

      {/* Formulaire d'édition en condition*/}
      {(() => {
        if (user && displayEditName) {
          return (
            <section className="user-details">
              <EditName
                username={user.userName}
                firstname={user.firstName}
                lastname={user.lastName}
              />
            </section>
          );
        } else {
          return null; // Rien n'est affiché si la condition n'est pas remplie
        }
      })()}

      {/* Transactions sous forme de boucle avec le map*/}
      <section>
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            title={transaction.title}
            amount={transaction.amount}
            description={transaction.description}
          />
        ))}
      </section>
    </main>
  );
}
