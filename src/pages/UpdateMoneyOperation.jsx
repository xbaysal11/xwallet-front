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
      <div className="categories page-content">
        <div className="categories-item">
          <div className="money_operation">
            <div>
              <div className="money_operation-left">
                <h3>{comment}</h3>
                <p>{moment(date).format("DD.MM.YYYY HH:mm")}</p>
              </div>
              <div className="money_operation-right">
                <h3>
                  {amount &&
                    amount
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="categories-item categories-inputs">
          <input
            type="text"
            value={comment}
            placeholder="Comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <input
            type="text"
            value={amount}
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="datetime-local"
            value={moment(date).format("YYYY-MM-DDTHH:mm")}
            placeholder="Date"
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

          <button
            onClick={() => dispatch(deleteMoneyOperation(id))}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
