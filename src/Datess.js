import React from 'react';
import Chart from "react-google-charts";

function Datess() {
    return (
        <div>
            <Chart
            width={'900px'}
            height={'600px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={[
                [
                { type: 'string', id: 'President' },
                { type: 'date', id: 'Start' },
                { type: 'date', id: 'End' },
                ],
                ['Set kick-off meeting', new Date(2022, 9, 2), new Date(2022, 9, 3)],
                ['Agree on objectives', new Date(2022, 9, 3), new Date(2022, 9, 7)],
                ['Detailed Reqs.', new Date(2022, 9, 7), new Date(2022, 9, 12)],
                ['Hardward Reqs.', new Date(2022, 9, 9), new Date(2022, 9, 11)],
                ['Final Resource Plan', new Date(2022, 9, 11), new Date(2022, 9, 15)],
                ['Staffing', new Date(2022, 9, 16), new Date(2022, 9, 17)],
                ['Techincal Reqs.', new Date(2022, 9, 17), new Date(2022, 9, 21)],
                ['Testing', new Date(2022, 9, 24), new Date(2022, 10, 2)],
                ['Dev. Complete', new Date(2022, 10, 2), new Date(2022, 10, 5)],
                ['Hardware Config.', new Date(2022, 10, 5), new Date(2022, 10, 7)],
                ['System Testing', new Date(2022, 10, 6), new Date(2022, 10, 9)],
                ['Launch', new Date(2022, 10, 9), new Date(2022, 10, 10)],
            ]}
            options={{
                showRowNumber: true,
            }}
            rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default Datess
