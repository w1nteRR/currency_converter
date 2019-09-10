import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { convert } from 'cashify';
import { useDispatch } from 'react-redux';

import Input from '../components/control/Input';
import CurrencyList from '../components/control/CurrencyList';
import CurrencyListTo from '../components/control/CurrencyListTo';
import SwitchButton from '../components/control/SwitchButton';

import '../styles/control.scss';

const Control = () => {
    const dispatch = useDispatch();

    const [rates, setRates] = useState('');

    const [from, setFrom] = useState('');
    const [base, setBase] = useState('');
    const [to, setTo] = useState('');

    const [result, setResult] = useState('');
    const [inputFrom, setInputFrom] = useState('');

    const entries = Object.entries(rates);

    useEffect(() => {
        const getCurrency = async () => {
            const res = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`);
            setRates(res.data.rates);
        }

        getCurrency()
    }, [base]);

    useEffect(() => {
        const converter = async () => {
            let result = convert(inputFrom, { from: from, to: to, base: base, rates });
            setResult(result);
        }

        converter()
    }, [inputFrom, from, to])

    const setCurrencyFrom = event => {
        setFrom(event.target.value[0]);
        setBase(event.target.value[0]);
        dispatch({ type: 'ADD_CURRENCY_FROM', payload: event.target.value[0] });
    }

    const setCurrencyTo = event => {
        setTo(event.target.value[0]);
        dispatch({ type: 'ADD_CURRENCY_TO', payload: event.target.value[0] });
    }

    const switchCurrency = () => {
        setFrom(to);
        setTo(from);
        dispatch({ type: 'ADD_CURRENCY_FROM', payload: to });
        dispatch({ type: 'ADD_CURRENCY_TO', payload: from });
    }

    return (
        <div className='control__container'>
            <div className='side'>
                <Input label='Input' handleChange={e => setInputFrom(e.target.value)} />
                <CurrencyList rates={entries} from={from} base={base} handleChange={setCurrencyFrom} />
            </div>
            <SwitchButton switchCurrency={switchCurrency} />
            <div className='side'>
                <Input label={result} disabled={true} />
                <CurrencyListTo rates={entries} to={to} handleChange={setCurrencyTo} />
            </div>
        </div>
    )
}

export default Control;
