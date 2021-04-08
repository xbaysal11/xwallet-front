/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import PT from "prop-types";
import moment from "moment";

import { createMoneyOperation } from "../../store/moneyOperations/actions";
import { getWallets } from "../../store/wallets/actions";
import { getCategories } from "../../store/categories/actions";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "../../components";
import { statuses } from "../../config";

export default function CreateExpInc(props) {
  const { values } = props;
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0);
  const [walletId, setWalletId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [date, setDate] = useState(moment().toISOString());
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallets());
    dispatch(getCategories());
  }, []);

  let walletsCarousel;
  const wallets = store.wallets.wallets;
  wallets.status === statuses.SUCCESS
    ? (walletsCarousel = (
        <Carousel
          items={wallets.wallets.wallet}
          active={0}
          onChange={setWalletId}
          type="wallets"
        />
      ))
    : wallets.status === statuses.LOADING
    ? (walletsCarousel = <h2>loading</h2>)
    : (walletsCarousel = <h2>no data</h2>);

  let categoriesCarousel;
  const categories = store.categories.categories;
  let categoryList = [];
  let categoryList1 = categories.categories.filter((obj) => {
    if (obj.type === values.type) {
      categoryList.push(obj);
      console.log("aaa", obj);
    }
    return obj.type === values.type;
  });
  categoryList.push(categoryList1);
  console.log("list", categoryList);
  categories.status === statuses.SUCCESS
    ? (categoriesCarousel = (
        <Carousel
          items={categoryList}
          active={0}
          onChange={setCategoryId}
          type="categories"
        />
      ))
    : categories.status === statuses.LOADING
    ? (categoriesCarousel = <h2>loading</h2>)
    : (categoriesCarousel = <h2>no data</h2>);

  return (
    <div className="money_operations">
      {walletsCarousel}
      {categoriesCarousel}
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
