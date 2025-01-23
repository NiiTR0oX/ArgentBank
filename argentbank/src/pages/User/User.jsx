import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./../../Redux/ProfileSlice.js";
import "./user.scss";
import Transaction from "../../components/Account/Transaction.jsx";
import EditName from "../../components/EditName/EditName.jsx";
import { useNavigate } from "react-router-dom";

export default function User() {

  const [displayEditName, setDisplayEditName] =  useState (false)
  const dispatch = useDispatch();
  const [user, setUser] = useState (null)
  const {token} = useSelector((state) => state.login);
  const navigate = useNavigate();

    // Charger les informations utilisateur lorsque le composant est monté
    useEffect(() => {
      const loadUserData = async () => {
        if(token){
          const promise = await dispatch(fetchUserData(token))
          if (fetchUserData.fulfilled.match(promise)) {
            setUser(promise.payload);
          } else {
            console.error('Failed to fetch user data:', promise.payload);
          }
        } else {
          navigate("/sign-in");
        }
      }
      loadUserData()
    }, [dispatch, token]);

  // rajouter la logique de redux sur le dispatch
  const handleEditName =() => {
    setDisplayEditName(!displayEditName)
  }


  return (
    <>
  
      {/* Contenu principal */}
      <main className="main bg-dark">
        {/* En-tête utilisateur */}
        <div className="header">
          { user && <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1> }
          <button onClick={handleEditName} className="edit-button">Edit Name</button>
        </div>
  
        {/* ma condition */}
        {user && (displayEditName && <section className="user-details"> 
        <EditName username={user.userName} firstname={user.firstName} lastname={user.lastName}/>
        </section> )}
        
  
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