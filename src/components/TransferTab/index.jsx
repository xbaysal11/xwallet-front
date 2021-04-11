/* eslint-disable indent */
import React, { useEffect } from "react";
// import { login, authRegisterRequest } from "../store/auth/actions";
import { getMoneyOperations } from "../../store/moneyOperations/actions";
import { useSelector, useDispatch } from "react-redux";
import { statuses } from "../../config";
import { MoneyOperationItem } from "..";

export default function TransferTab() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMoneyOperations({
        filters: {
          type: 3,
        },
      })
    );
  }, []);
  console.log(store);

  let tabContent;
  const moneyOperations = store.moneyOperations.moneyOperations;
  moneyOperations.status === statuses.SUCCESS
    ? (tabContent = moneyOperations.moneyOperations.map((item, idx) => (
        <MoneyOperationItem key={idx} values={item} />
        // <div key={idx}>
        //   <span>{item.amount}</span>
        //   <br />
        // </div>
      )))
    : moneyOperations.status === statuses.LOADING
    ? (tabContent = <h2>loading</h2>)
    : (tabContent = <h2>no data</h2>);

  return (
    <div className="home">
      {/* <h2>ExpenseTab</h2> */}
      <div className="money_operations-list">{tabContent}</div>
    </div>
  );
}
