import React, { useState, useEffect } from 'react';
import Card from '../shared/card/Card';
import Chart from '../shared/chart/Chart';

import './CompanySummary.scss';
import { InputGroup, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import share_history_dtg from '../../data/SHARE_HISTORY_DTG.json'
import epsHistory from '../../data/EPS_HISTORY.json'


interface CompanySummaryProps {

}

const CompanySummary: React.FC<CompanySummaryProps> = () => {
    const [dailyPrices, setDailyPrices] = useState()

    const [nameToSearch, setNameToSearch] = useState('');

    useEffect(() => {
        setDailyPrices(share_history_dtg)
    }, [share_history_dtg])

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
                            <p>Hi there!</p>
                        </Card>
                    </section>
                    <Chart />

                </section>
            </section>

            <section className="financials">
                <h4 className="financials-title">Financials</h4>

                <Card
                    title="Hello World"
                >
                    <p>Hi there!</p>
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