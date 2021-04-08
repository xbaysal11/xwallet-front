/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import PT from "prop-types";
import moment from "moment";

import { createMoneyOperation } from "../../store/moneyOperations/actions";
import { getWallets } from "../../store/wallets/actions";

import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "../../components";
import { statuses } from "../../config";

export default function CreateTransfer(props) {
  const { values } = props;

  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0);
  const [fromWalletId, setFromWalletId] = useState("");
  const [toWalletId, setToWalletId] = useState("");
  const [date, setDate] = useState(moment().toISOString());
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallets());
  }, []);

  let fromWalletsCarousel, toWalletsCarousel;
  const wallets = store.wallets.wallets;
  wallets.status === statuses.SUCCESS
    ? (fromWalletsCarousel = (
        <Carousel
          items={wallets.wallets.wallet}
          active={0}
          onChange={setFromWalletId}
          type="wallets"
        />
      ))
    : wallets.status === statuses.LOADING
    ? (fromWalletsCarousel = <h2>loading</h2>)
    : (fromWalletsCarousel = <h2>no data</h2>);

  wallets.status === statuses.SUCCESS
    ? (toWalletsCarousel = (
        <Carousel
          items={wallets.wallets.wallet}
          active={0}
          onChange={setToWalletId}
          type="wallets"
        />
      ))
    : wallets.status === statuses.LOADING
    ? (toWalletsCarousel = <h2>loading</h2>)
    : (toWalletsCarousel = <h2>no data</h2>);
  return (
    <div className="money_operations">
      {fromWalletsCarousel}
      {toWalletsCarousel}
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
