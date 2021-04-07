/* eslint-disable indent */
import React, { useState } from "react";
import PT from "prop-types";
import moment from "moment";

import { createMoneyOperation } from "../../store/moneyOperations/actions";
import { useDispatch } from "react-redux";

export default function CreateExpInc(props) {
  const { values } = props;
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0);
  const [walletId, setWalletId] = useState("");
  const [categoryId, setCategoryId] = useState("");
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
        value={categoryId}
        placeholder="money operation category"
        onChange={(e) => setCategoryId(e.target.value)}
      />
      <input
        type="text"
        value={walletId}
        placeholder="money operation wallet"
        onChange={(e) => setWalletId(e.target.value)}
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
              comment,
              type: values.type,
              amount,
              walletId,
              categoryId,
              date,
            })
          )
        }
      >
        Create
      </button>
    </div>
  );
}

CreateExpInc.propTypes = {
  values: PT.object,
};
