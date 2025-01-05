import { useState } from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../Redux/UpdateProfileSlice.js";

export default function EditName ({username , firstname , lastname}) {
  const [newUserName, setNewUserName] = useState("")

  const {token} = useSelector((state) => state.login);
  console.log(token)

  const dispatch = useDispatch();

  const handleForm = (event) => {
// gérer la validation du formulaire des champs
event.preventDefault()

if (!newUserName.trim()) {
  setError("Le nom d'utilisateur ne peut pas être vide.");
  return;
}

setError(""); // Réinitialiser l'erreur si tout est bon

console.log(newUserName)
// vérification si UserName n'est pas vide avec un if
// envoyer le username dans updateuserdata avec le token
debugger
// faire l'appel API avec redux dans UpdateAccountSlice {fait}
        // if(token){
        //   const promise = dispatch(updateUserData(token))
        //   if (updateUserData.fulfilled.match(promise)) {
        //     console.log(promise.payload);
        //   } else {
        //     console.error('Failed to fetch user data:', promise.payload);
        //   }
        // }
  }

  // EN BAS C'EST CE QUE CHATGPT M'A CONSEILLE DE METTRE

  // const handleForm = async (event) => {
  //   event.preventDefault();

  //   // Vérification si `newUserName` n'est pas vide
  //   if (!newUserName.trim()) {
  //     setError("Le nom d'utilisateur ne peut pas être vide.");
  //     return;
  //   }

  //   setError(""); // Réinitialiser l'erreur s'il y en avait

  //   // Envoyer le `username` avec le `token` dans `updateUserData`
  //   try {
  //     if (token) {
  //       const promise = await dispatch(updateUserData({ token, username: newUserName }));

  //       if (updateUserData.fulfilled.match(promise)) {
  //         console.log("Mise à jour réussie :", promise.payload);
  //         alert("Nom d'utilisateur mis à jour avec succès !");
  //       } else {
  //         console.error("Erreur lors de la mise à jour :", promise.payload);
  //         alert("Une erreur est survenue lors de la mise à jour.");
  //       }
  //     } else {
  //       console.error("Aucun token trouvé. Impossible de mettre à jour.");
  //     }
  //   } catch (error) {
  //     console.error("Erreur inattendue :", error);
  //     alert("Une erreur inattendue est survenue.");
  //   }
  // };

  return (
    <main className="main bg-dark">
    <section className="sign-in-content toogle-edit-name">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Edit User info</h1>
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