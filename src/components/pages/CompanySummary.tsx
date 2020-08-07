import React from 'react';
import Card from '../shared/card/Card';
import Chart from '../shared/chart/Chart';

interface CompanySummaryProps {

}
const CompanySummary: React.FC<CompanySummaryProps> = () => {
    return (
        <section className="company-summary-page">
            <section className="overview">
                <h4 className="overview-title">Overview</h4>
                <section className="overview-blocks">
                    <Card
                        title="Hello World"
                    >
                        <p>Hi there!</p>
                    </Card>
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