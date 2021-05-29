import React from 'react';
import Chart from "react-google-charts";

function PendingItems() {
    return (
        <div>
            <Chart
            width={'400px'}
            height={'300px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                [' ', 'Decisions', 'Actions', 'Change Requests'],
                [' ', 5, 2, 4],
            ]}
            options={{
                // Material design options
                chart: {
                title: 'Pending Items',
                },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default PendingItems
