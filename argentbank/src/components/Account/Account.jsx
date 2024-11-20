import button from "../Button/Button.jsx";

const Account = ({title,amount,description}) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">{title}</h3>
              <p className="account-amount">{amount}</p>
              <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
              <Button className={"transaction-button"} btnText={"View transactions"}></Button>
            </div>
          </section>
      );
}

export default Account;