/* eslint-disable indent */
import React, { useState } from "react";
import PT from "prop-types";
import moment from "moment";

import { createMoneyOperation } from "../../store/moneyOperations/actions";
import { useDispatch } from "react-redux";

export default function CreateTransfer(props) {
  const { values } = props;

  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0);
  const [fromWalletId, setFromWalletId] = useState("");
  const [toWalletId, setToWalletId] = useState("");
  const [date, setDate] = useState(moment().toISOString());
  const dispatch = useDispatch();

  return (
    <div className="money_operations">
      <div className="money_operations-item">
        <div className="money_operation">
          <div className="money_operation-name">
            <p>{comment}</p>
          </div>
        </div>
      </div>
      <input
        type="datetime-local"
        value={moment(date).format("YYYY-MM-DDTHH:mm")}
        placeholder="money operation date"
        onChange={(e) => setDate(moment(e.target.value).toISOString())}
      />
      <input
        type="text"
        value={fromWalletId}
        placeholder="money operation fromWalletId"
        onChange={(e) => setFromWalletId(e.target.value)}
      />
      <input
        type="text"
        value={toWalletId}
        placeholder="money operation toWalletId"
        onChange={(e) => setToWalletId(e.target.value)}
      />
      <input
        type="text"
        value={comment}
        placeholder="money operation comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <input
        type="text"
        value={amount}
        placeholder="money operation amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            createMoneyOperation({
              date,
              comment,
              type: values.type,
              amount,
              fromWalletId,
              toWalletId,
            })
          )
        }
      >
        Create
      </button>
    </div>
  );
}
CreateTransfer.propTypes = {
  values: PT.object,
};
