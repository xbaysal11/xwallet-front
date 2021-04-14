/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getMoneyOperationById,
  updateMoneyOperation,
  deleteMoneyOperation,
} from "../store/moneyOperations/actions";

const TITLE = "Update Money Operation - xWallet";

export default function UpdateMoneyOperation() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState(moment().toISOString());

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(getMoneyOperationById(id));
      setComment(result.comment);
      setAmount(result.amount);
      setDate(moment(result.date).toISOString());
      console.log("result", result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="categories">
        <div className="categories-item">
          <div className="category">
            <div className="category-name">
              <p>{comment}</p>
            </div>
          </div>
        </div>
        <input
          type="text"
          value={comment}
          placeholder="mo name"
          onChange={(e) => setComment(e.target.value)}
        />
        <input
          type="text"
          value={amount}
          placeholder="mo amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="datetime-local"
          value={moment(date).format("YYYY-MM-DDTHH:mm")}
          placeholder="money operation date"
          onChange={(e) => setDate(moment(e.target.value).toISOString())}
        />
        <button
          onClick={() =>
            dispatch(
              updateMoneyOperation({ comment, amount: amount || 0, date }, id)
            )
          }
        >
          Update
        </button>

        <button onClick={() => dispatch(deleteMoneyOperation(id))}>
          Delete
        </button>
      </div>
    </>
  );
}
