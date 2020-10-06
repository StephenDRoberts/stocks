import React, { useState } from 'react';
import { InputGroup, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { useGetDailyPrices, useGetAnnualData } from '../shared/hooks/use-queries';
import Card from '../shared/card/Card';
import Chart from '../shared/chart/Chart';
import IncomeStatement from '../sections/IncomeStatement'

import './CompanySummary.scss';

const CompanySummary: React.FC = () => {
    const data = useGetDailyPrices()
    const annualData = useGetAnnualData()

    const incomeStatementData = annualData.map(data =>  {
        const startDate = data.startDate
        const endDate = data.endDate
        const originalIncomeStatement = data.incomeStatement

        let incomeStatementWithDates = originalIncomeStatement
        incomeStatementWithDates.startDate = startDate
        incomeStatementWithDates.endDate = endDate
        
        return incomeStatementWithDates
    })

console.log("annualData", annualData)

    const [nameToSearch, setNameToSearch] = useState('');

    if (data.length === 0) return <section></section>
    console.log("data", data)
    return (
        <section className="company-summary-page" data-testid="company-summary-page">
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

                <Card
                    title="Income Statement"
                >
                    <IncomeStatement data={incomeStatementData}/>
                </Card>
            </section>

            <section className="ratios">
                <h4 className="ratios-title">Ratios</h4>

                <Card
                    title="Hello World"
                >
                    <p>Hi there!</p>
                </Card>
            </section>
        </section>
    )
}
export default CompanySummary;