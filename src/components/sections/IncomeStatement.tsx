import React from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

import "./IncomeStatement.scss";

interface IncomeStatementProps {
  data: any[];
}

const IncomeStatement: React.FC<IncomeStatementProps> = (props) => {
  const { data } = props;
  const dates: string[] = data.map((x) => x.endDate);

  const generateTableHeaders = (dates: string[]) => {
    const headers = dates.map((date) => (
      <th scope="col" className="col-2">
        {formatDate(date)}
      </th>
    ));

    return (
      <tr key="income-statement-header-row">
        <th></th>
        {headers}
      </tr>
    );
  };

  const generateTableData = (data: any[]) => {
    console.log("data type", data);
    const ebitda = data.map((x) => (
      <td className="col-2">{formatCurrency(x.ebitda / 1000000)}</td>
    ));
    const revenue = data.map((x) => (
      <td className="col-2">{formatCurrency(x.revenue / 1000000)}</td>
    ));
    const basicEPS = data.map((x) => (
      <td className="col-2">{x.earningsPerShare.basic}</td>
    ));
    const dilutedEPS = data.map((x) => (
      <td className="col-2">{x.earningsPerShare.diluted}</td>
    ));
    const netIncome = data.map((x) => (
      <td className="col-2">
        {formatCurrency(x.netIncomeAvailableToCommonShareholders / 1000000)}
      </td>
    ));
    return (
      <tbody>
        <tr key="revenue-row">
          <td>Revenue</td>
          {revenue}
        </tr>
        <tr key="ebitda-row">
          <td>EBITDA</td>
          {ebitda}
        </tr>
        <tr key="net-income-row">
          <td>Net Income</td>
          {netIncome}
        </tr>
        <tr key="basic-eps-row">
          <td>Basic EPS</td>
          {basicEPS}
        </tr>
        <tr key="diluted-eps-row">
          <td>Diluted EPS</td>
          {dilutedEPS}
        </tr>
      </tbody>
    );
  };

  return (
    <table className="table">
      <thead>{generateTableHeaders(dates)}</thead>
      {generateTableData(data)}
    </table>
  );
};

export default IncomeStatement;
