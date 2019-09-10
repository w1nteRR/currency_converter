import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ to, history }) => {

    const labels = Object.keys(history);
    const values = Object.values(history).map(o => Object.values(o));
    
    const [line, setLine] = useState({
        labels: [],
        datasets: [
            {
                label: '',
                borderColor: 'blue',
                data: [],
            }
        ]
    })

    const updateData = () => {
        line.datasets[0].label = to
        line.labels = labels || []
        line.datasets[0].data = values || []
    }

    updateData();

    return (
        <div className='chart'>
            <Line data={line}  />
        </div>
    )
}

export default Chart;