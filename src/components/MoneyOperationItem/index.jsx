import React from "react";
import PT from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";

export default function MoneyOperationItem(props) {
  const { values } = props;
  return (
    <div className="money_operation">
      <Link to={`/money-operations/${values.id}`}>
        {values.type === 3 ? (
          <div>
            <div className="money_operation-left">
              <h3>{values.comment}</h3>
              <p>
                {values.fromWallet.name} {"→"} {values.toWallet.name}
              </p>
              <p>{moment(values.date).format("DD.MM.YYYY HH:mm")}</p>
            </div>
            <div className="money_operation-right">
              <h3>
                {values.amount &&
                  values.amount
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
              </h3>
            </div>
          </div>
        ) : (
          <div>
            <div className="money_operation-left">
              <h3>{values.comment}</h3>
              <p>{values.category.name}</p>
              <p>{values.wallet.name}</p>
              <p>{moment(values.date).format("DD.MM.YYYY HH:mm")}</p>
            </div>
            <div className="money_operation-right">
              <h3>
                {values.type === 1 ? "-" : "+"}{" "}
                {values.amount &&
                  values.amount
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
              </h3>
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
