import React from "react";
import PT from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";

export default function MoneyOperationItem(props) {
  const { values } = props;
  // console.log("asdaf", values.fromWallet);
  return (
    <div>
      <Link to={`/money-operations/${values.id}`}>
        {values.type === 3 ? (
          <div className="money_operation">
            <div className="money_operation-left">
              <h3>{values.comment}</h3>
              <p>
                {values.fromWallet.name} {"→"} {values.toWallet.name}
              </p>
              <p>{moment(values.date).format("DD.MM.YYYY HH:mm")}</p>
            </div>
            <div className="money_operation-right">
              <h3>{values.amount}</h3>
            </div>
          </div>
        ) : (
          <div className="money_operation">
            <div className="money_operation-left">
              <h3>{values.comment}</h3>
              <p>{values.category.name}</p>
              <p>{values.wallet.name}</p>
              <p>{moment(values.date).format("DD.MM.YYYY HH:mm")}</p>
            </div>
            <div className="money_operation-right">
              <h3>{values.amount}</h3>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}
MoneyOperationItem.propTypes = {
  values: PT.object,
};
