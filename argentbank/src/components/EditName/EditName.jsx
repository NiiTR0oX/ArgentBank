import { useState } from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../Redux/UpdateProfileSlice.js";
import { fetchUserData } from "../../Redux/ProfileSlice.js";

export default function EditName ({username , firstname , lastname}) {
  const [newUserName, setNewUserName] = useState("")
  const [error, setError] = useState("")

  const {token} = useSelector((state) => state.login);
  console.log(token)

  const dispatch = useDispatch();

  const handleForm = async (event) => {
// gérer la validation du formulaire des champs
event.preventDefault()

if (!newUserName.trim()) {
  setError("Le nom d'utilisateur ne peut pas être vide.");
  return;
}

setError(""); // Réinitialiser l'erreur si tout est bon

try {
  if (token) {
    const promise = await dispatch(updateUserData({ token, username: newUserName }));
    if (updateUserData.fulfilled.match(promise)) {
      console.log("Mise à jour réussie :", promise.payload);
      alert("Nom d'utilisateur mis à jour avec succès !");
      dispatch(fetchUserData(token))
    } else {
      console.error("Erreur lors de la mise à jour :", promise.payload);
    }
  } else {
    setError("Token manquant. Impossible de mettre à jour.");
  }
} catch (error) {
  console.error("Erreur inattendue :", error);
  setError("Une erreur inattendue est survenue.");
}
}

  return (
    <main className="main bg-dark">
    <section className="sign-in-content toogle-edit-name">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Edit User info</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleForm} onClick={(event) => event.stopPropagation()}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value) }
            type="text"
            id="username"
            placeholder={username}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            disabled
            value={firstname}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            disabled
            value={lastname}
          />
        </div>
        <Button btnText={"Save"} className={"sign-in-button"}/>
      </form>
        <Button btnText={"Cancel"} className={"sign-in-button"}/>
    </section>
    </main>
  );
}