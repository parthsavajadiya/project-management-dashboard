import React from 'react';
import Chart from "react-google-charts";

function Budget() {
    return (
        <div>
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
                [
                'Element',
                'Density',
                { role: 'style' },
                {
                    sourceColumn: 0,
                    role: 'annotation',
                    type: 'string',
                    calc: 'stringify',
                },
                ],
                ['Actual', 50000, '#b87333', null],
                ['Planned', 80000, 'silver', null],

            ]}
            options={{
                title: 'Budget',
                width: 600,
                height: 200,
                bar: { groupWidth: '95%' },
                legend: { position: 'none' },
            }}
            // For tests
            rootProps={{ 'data-testid': '6' }}
            />
        </div>
    )
}

export default Budget
