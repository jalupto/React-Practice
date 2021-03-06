import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import moment from 'moment';

const LineChart = (props) => {
    const [dates, setDates] = useState([]);
    const [payout, setPayout] = useState([]);

    useEffect(() => {
        const unsortedData = props.data;
        let dates = [];
        let payout = [];
        for (let item in unsortedData) {
            let bitcoinDates = moment(item).format('MMM DD');
            dates.push(bitcoinDates);
            payout.push(unsortedData[item]);
        }
        setDates(dates);
        setPayout(payout);
    }, [props.data])

    useEffect(() => {
        var chartContext = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(chartContext, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    data: payout,
                    backgroundColor: '#d9514e80',
                    borderColor: '#d9514e',
                    borderWidth: 2
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxis: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }, [payout, dates])

    return(
        <div>
            <canvas id='myChart'></canvas>
        </div>
    );
};

export default LineChart;