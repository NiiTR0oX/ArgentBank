export default function EditName () {
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
            onChange={handleChangeUserName}
            type="text"
            id="username"
            placeholder="Tapez votre username"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            disabled
            value={storeUserProfil.firstName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            disabled
            value={storeUserProfil.lastName}
          />
        </div>
        <Button  btnText={"Save"} className={"sign-in-button"}/>
      </form>
        <Button  btnText={"Cancel"} onClick={handleCancel} className={"sign-in-button"}/>
    </section>
    </main>
  );
}