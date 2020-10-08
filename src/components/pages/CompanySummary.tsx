import React, { useState, useEffect } from "react";
import { InputGroup, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import {
  useGetDailyPrices,
  useGetAnnualData,
} from "../shared/hooks/use-queries";
import Card from "../shared/card/Card";
import Chart from "../shared/chart/Chart";
import IncomeStatement from "../sections/IncomeStatement";
import { formatDoubleDigits } from "../utils/formatDoubleDigits";

import "./CompanySummary.scss";
import { DailyPrice } from "../shared/types";

const ONEDAY = 1000 * 60 * 60 * 24;

const CompanySummary: React.FC = () => {
  const data = useGetDailyPrices();
  const annualData = useGetAnnualData();
  const [nameToSearch, setNameToSearch] = useState("");
  const [hydratedData, setHydratedData] = useState([] as DailyPrice[])


  useEffect(() => {
    setHydratedData(hydrateData(data))
  },[data])
  
  if (!data) return <section></section>;

  const hydrateData = (unhydratedData: DailyPrice[]) => {
      console.log("HYDRATING!!!!")
    let dataWithWeekends = [];

    for (let i = 0; i < unhydratedData.length; i++) {
      if (i === unhydratedData.length - 1) {
        dataWithWeekends.push(unhydratedData[i]);
      } else {
        const date = new Date(unhydratedData[i].date);
  
        const nextDate = new Date(unhydratedData[i + 1].date).getTime();
        const dateDifference = (nextDate - date.getTime()) / ONEDAY;
  
        if (dateDifference > 1) {
          for (let j = 0; j < dateDifference; j++) {
            const newDate = new Date(date.getTime() + ONEDAY * j);
            const newYear = newDate.getUTCFullYear().toString();
            const newMonth = formatDoubleDigits(newDate.getUTCMonth() + 1);
            const newDay = formatDoubleDigits(newDate.getUTCDate());
  
            const weekendEntry = {
              date: `${newYear}-${newMonth}-${newDay}`,
              open: unhydratedData[0].open,
              high: unhydratedData[0].high,
              low: unhydratedData[0].low,
              last: unhydratedData[0].last,
              volume: unhydratedData[0].volume,
            };
            dataWithWeekends.push(weekendEntry);
          }
        } else {
          dataWithWeekends.push(unhydratedData[i]);
        }
      }
    }
    return dataWithWeekends
  }
  
  const incomeStatementData = annualData.map((data) => {
    const startDate = data.startDate;
    const endDate = data.endDate;
    const originalIncomeStatement = data.incomeStatement;

    let incomeStatementWithDates = originalIncomeStatement;
    incomeStatementWithDates.startDate = startDate;
    incomeStatementWithDates.endDate = endDate;

    return incomeStatementWithDates;
  });

  if (data.length === 0) return <section></section>;

  return (
    <section
      className="company-summary-page"
      data-testid="company-summary-page"
    >
      <section className="overview">
        <section className="overview-header">
          <h4 className="overview-title">Overview</h4>
          <InputGroup
            type="search"
            className="overview-search"
            onChange={(ev: any) => setNameToSearch(ev.target.value)}
            value={nameToSearch}
            placeholder="Search"
            leftElement={<Icon icon={IconNames.SEARCH} />}
          />
        </section>
        <section className="overview-blocks">
          <section className="overview-financials">
            <Card>
              <p className="financial-title">Close</p>
              <p className="financial-value">{data[data.length - 1].last}</p>
            </Card>
          </section>
          <Chart />
        </section>
      </section>

      <section className="financials">
        <h4 className="financials-title">Financials</h4>

        <Card title="Income Statement">
          <IncomeStatement data={incomeStatementData} />
        </Card>
      </section>

      <section className="ratios">
        <h4 className="ratios-title">Ratios</h4>

        <Card title="Hello World">
          <p>Hi there!</p>
        </Card>
      </section>
    </section>
  );
};
export default CompanySummary;
