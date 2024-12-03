import Button from "../Button/Button.jsx"
import { PropTypes } from "prop-types";

const Transaction = ({title,amount,description}) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">{title}</h3>
              <p className="account-amount">{amount}</p>
              <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
              <Button className={"transaction-button"} btnText={"View transactions"} />
            </div>
          </section>
      );
};
Transaction.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Transaction;