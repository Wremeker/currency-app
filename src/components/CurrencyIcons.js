import React from 'react';

export const currencyIcons = [
    'CLP',
    'RUB',
    'BTN',
    'ARS',
    'AWG',
    'AZN',
    'BAM',
    'BZD',
    'CAD',
    'CLF',
    'CNY',
    'BRL'
];

export const CurrencyIcons = ({ ...props }) => (
    <div className="currency-app__add">
        {
            currencyIcons.map((item, index) => (
                <span className="currency__icon" key={index} onClick={props.onClick}>{item}</span>
            ))
        }
    </div>
)

export default CurrencyIcons;