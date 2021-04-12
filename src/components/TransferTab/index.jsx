/* eslint-disable indent */
import React, { useEffect } from "react";
// import { login, authRegisterRequest } from "../store/auth/actions";
import { getMoneyOperations } from "../../store/moneyOperations/actions";
import { useSelector, useDispatch } from "react-redux";
import { statuses } from "../../config";
import { MoneyOperationItem } from "..";
import { RotateSpinner } from "react-spinners-kit";

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
      )))
    : moneyOperations.status === statuses.LOADING
    ? (tabContent = (
        <div className="spinner-container">
          <RotateSpinner size={30} color="#157CE3" loading={true} />
        </div>
      ))
    : (tabContent = (
        <div className="spinner-container">
          <p>No Data</p>
        </div>
      ));

  return (
    <div className="home">
      <div className="money_operations-list">{tabContent}</div>
    </div>
  );
}
