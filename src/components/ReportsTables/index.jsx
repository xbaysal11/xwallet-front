import React, { useEffect } from "react";
import PT from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import moment from "moment";

import { getMoneyOperations } from "../../store/moneyOperations/actions";
import { getCategories } from "../../store/categories/actions";

ReportsTables.propTypes = {
  type: PT.number,
  label: PT.string,
};

export default function ReportsTables(props) {
  const { label, type } = props;
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      await dispatch(
        getMoneyOperations({
          filters: {
            type: type,
          },
        })
      );
      await dispatch(getCategories());
    };
    fetch();
  }, []);

  const monOp = store.moneyOperations.moneyOperations.moneyOperations;
  const categ = [];

  store.categories.categories.categories &&
    store.categories.categories.categories.map((item) => {
      if (item.type === type) {
        categ.push({ name: item.name, id: item.id, amount: 0 });
      }
    });
  console.log("categ", categ);
  let months = [],
    // month_1 = [0],
    month_1 = { total: 0, mo: [], categories: [] },
    month_2 = { total: 0, mo: [], categories: [] },
    month_3 = { total: 0, mo: [], categories: [] },
    month_4 = { total: 0, mo: [], categories: [] },
    month_5 = { total: 0, mo: [], categories: [] },
    month_6 = { total: 0, mo: [], categories: [] },
    month_7 = { total: 0, mo: [], categories: [] },
    month_8 = { total: 0, mo: [], categories: [] },
    month_9 = { total: 0, mo: [], categories: [] },
    month_10 = { total: 0, mo: [], categories: [] },
    month_11 = { total: 0, mo: [], categories: [] },
    month_12 = { total: 0, mo: [], categories: [] };

  for (let i = 0; i < 12; i++) {
    months.unshift({
      name: moment().subtract(i, "M").format("MMMM"),
      startDate: moment(
        moment().subtract(i, "M").startOf("month")
      ).toISOString(),
    });
  }
  monOp.map((item) => {
    month_1.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_2.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_3.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_4.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_5.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_6.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_7.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_8.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_9.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_10.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_11.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));
    month_12.categories = categ.map((item) => ({
      name: item.name,
      amount: 0,
    }));

    if (months[11].startDate < item.date) {
      month_1.total = month_1.total + item.amount;
      month_1.mo.push(item);
    } else if (months[10].startDate < item.date) {
      month_2.total = month_2.total + item.amount;
      month_2.mo.push(item);
    } else if (months[9].startDate < item.date) {
      month_3.total = month_3.total + item.amount;
      month_3.mo.push(item);
    } else if (months[8].startDate < item.date) {
      month_4.total = month_4.total + item.amount;
      month_4.mo.push(item);
    } else if (months[7].startDate < item.date) {
      month_5.total = month_5.total + item.amount;
      month_5.mo.push(item);
    } else if (months[6].startDate < item.date) {
      month_6.total = month_6.total + item.amount;
      month_6.mo.push(item);
    } else if (months[5].startDate < item.date) {
      month_7.total = month_7.total + item.amount;
      month_7.mo.push(item);
    } else if (months[4].startDate < item.date) {
      month_8.total = month_8.total + item.amount;
      month_8.mo.push(item);
    } else if (months[3].startDate < item.date) {
      month_9.total = month_9.total + item.amount;
      month_9.mo.push(item);
    } else if (months[2].startDate < item.date) {
      month_10.total = month_10.total + item.amount;
      month_10.mo.push(item);
    } else if (months[1].startDate < item.date) {
      month_11.total = month_11.total + item.amount;
      month_11.mo.push(item);
    } else if (months[0].startDate < item.date) {
      month_12.total = month_12.total + item.amount;
      month_12.mo.push(item);
    }
  });

  month_1.mo.map((item) => {
    if (!month_1.categories.find((el) => el.name === item.category?.name)) {
      month_1.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_1.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_1.categories[elementsIndex] = {
        ...month_1.categories[elementsIndex],
        amount: month_1.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_2.mo.map((item) => {
    if (!month_2.categories.find((el) => el.name === item.category?.name)) {
      month_2.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_2.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_2.categories[elementsIndex] = {
        ...month_2.categories[elementsIndex],
        amount: month_2.categories[elementsIndex].amount + item.amount,
      };
    }
  });

  month_3.mo.map((item) => {
    if (!month_3.categories.find((el) => el.name === item.category?.name)) {
      month_3.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_3.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_3.categories[elementsIndex] = {
        ...month_3.categories[elementsIndex],
        amount: month_3.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_4.mo.map((item) => {
    if (!month_4.categories.find((el) => el.name === item.category?.name)) {
      month_4.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_4.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_4.categories[elementsIndex] = {
        ...month_4.categories[elementsIndex],
        amount: month_4.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_5.mo.map((item) => {
    if (!month_5.categories.find((el) => el.name === item.category?.name)) {
      month_5.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_5.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_5.categories[elementsIndex] = {
        ...month_5.categories[elementsIndex],
        amount: month_5.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_6.mo.map((item) => {
    if (!month_6.categories.find((el) => el.name === item.category?.name)) {
      month_6.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_6.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_6.categories[elementsIndex] = {
        ...month_6.categories[elementsIndex],
        amount: month_6.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_7.mo.map((item) => {
    if (!month_7.categories.find((el) => el.name === item.category?.name)) {
      month_7.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_7.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_7.categories[elementsIndex] = {
        ...month_7.categories[elementsIndex],
        amount: month_7.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_8.mo.map((item) => {
    if (!month_8.categories.find((el) => el.name === item.category?.name)) {
      month_8.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_8.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_8.categories[elementsIndex] = {
        ...month_8.categories[elementsIndex],
        amount: month_8.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_9.mo.map((item) => {
    if (!month_9.categories.find((el) => el.name === item.category?.name)) {
      month_9.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_9.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_9.categories[elementsIndex] = {
        ...month_9.categories[elementsIndex],
        amount: month_9.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_10.mo.map((item) => {
    if (!month_10.categories.find((el) => el.name === item.category?.name)) {
      month_10.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_10.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_10.categories[elementsIndex] = {
        ...month_10.categories[elementsIndex],
        amount: month_10.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_11.mo.map((item) => {
    if (!month_11.categories.find((el) => el.name === item.category?.name)) {
      month_11.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_11.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_11.categories[elementsIndex] = {
        ...month_11.categories[elementsIndex],
        amount: month_11.categories[elementsIndex].amount + item.amount,
      };
    }
  });
  month_12.mo.map((item) => {
    if (!month_12.categories.find((el) => el.name === item.category?.name)) {
      month_12.categories.push({
        name: item.category?.name,
        amount: item.amount,
      });
    } else {
      const elementsIndex = month_12.categories.findIndex(
        (el) => el.name === item.category?.name
      );
      // console.log(elementsIndex);
      month_12.categories[elementsIndex] = {
        ...month_12.categories[elementsIndex],
        amount: month_12.categories[elementsIndex].amount + item.amount,
      };
    }
  });

  console.log("month", {
    month_1,
    month_2,
    month_3,
    month_4,
    month_5,
    month_6,
    month_7,
    month_8,
    month_9,
    month_10,
    month_11,
    month_12,
  });

  const data1 = {
    labels: months.map((item) => item.name),
    datasets: [
      {
        label: label,
        data: [
          month_12.total,
          month_11.total,
          month_10.total,
          month_9.total,
          month_8.total,
          month_7.total,
          month_6.total,
          month_5.total,
          month_4.total,
          month_3.total,
          month_2.total,
          month_1.total,
        ],
        backgroundColor: "#6d9eeb",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Pie Chart",
      },
    },
  };

  let tableData = [];
  for (let i = 0; i < 12; i++) {
    tableData.unshift(
      <tr>
        <td>{data1.labels[i]}</td>
        <td>{data1.datasets[0].data[i]}</td>
      </tr>
    );
  }

  return (
    <div className="charts">
      <div className="charts-graph">
        <Line data={data1} options={options} width={150} height={50} />
      </div>
      <div className="charts-table">
        <table>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
          {tableData}
        </table>
      </div>

      <div className="charts-monthly-table">
        <div className="charts-monthly-table-title">
          <h3>Monthly:</h3>
        </div>
        <div className="charts-monthly-table-body">
          <table>
            <tr>
              <th>{months[11].name}</th>
              <th>Amount</th>
            </tr>
            {month_1.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[10].name}</th>
              <th>Amount</th>
            </tr>
            {month_2.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[9].name}</th>
              <th>Amount</th>
            </tr>
            {month_3.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[8].name}</th>
              <th>Amount</th>
            </tr>
            {month_4.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[7].name}</th>
              <th>Amount</th>
            </tr>
            {month_5.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[6].name}</th>
              <th>Amount</th>
            </tr>
            {month_6.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[5].name}</th>
              <th>Amount</th>
            </tr>
            {month_7.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[4].name}</th>
              <th>Amount</th>
            </tr>
            {month_8.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[3].name}</th>
              <th>Amount</th>
            </tr>
            {month_9.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[2].name}</th>
              <th>Amount</th>
            </tr>
            {month_10.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[1].name}</th>
              <th>Amount</th>
            </tr>
            {month_11.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr>
              <th>{months[0].name}</th>
              <th>Amount</th>
            </tr>
            {month_12.categories.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
