import React from 'react'
import Chart from "react-google-charts";

function PieChart() {
    return (
        <div>
            <Chart
            width={'400px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Not Started', 45.45],
                ['Overdue', 9.09],
                ['In Progress', 18.18],
                ['Complete', 27.27],
            ]}
            options={{
                title: 'Overall Task Status',
            }}
            rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default PieChart

