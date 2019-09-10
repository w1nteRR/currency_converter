import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Chart from '../components/graph/Line';

import '../styles/chart.scss';

const Graph = () => {

    const from = useSelector(state => state.currency.currency_from);
    const to = useSelector(state => state.currency.currency_to);

    const [history, setHistory] = useState([]);
    const [base, setBase] = useState('');
    const [symbol, setSymbol] = useState('');

    useEffect(() => {
        const getHistory = async () => {
            const base_ = base || null
            const symbol_ = symbol || null
            const res = await axios.get(`https://api.exchangeratesapi.io/history?start_at=2019-08-01&end_at=2019-09-01&base=${base_}&symbols=${symbol_}`);
            setHistory(res.data.rates)
        }

        getHistory();
    }, [base, symbol])

    useEffect(() => {
        const updateCurrency = async () => {
            setBase(from);
            setSymbol(to);
        }

        updateCurrency();
    }, [from, to])

    return (
        <div className='chart__wrapper'>
            <Chart from={from} to={to} history={history} />
        </div>
    )
}

export default Graph;
