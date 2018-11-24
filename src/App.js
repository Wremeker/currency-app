import React, { Component } from 'react';
import { connect } from 'react-redux';
import initCurrency from './actions/initCurrency';
import addCurrency from './actions/addCurrency';
import CurrencyIcons from './components/CurrencyIcons';
import CurrencyItem from './components/CurrencyItem';
import CurrencyItems from './components/CurrencyItems';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.initCurrency();
  }
  handleClick(e) {
    this.props.addCurrency({
      value: e.target.innerHTML,
      timestamp: Date.now().toString()
    })
  }
  render() {
    return (
      <div className="currency-app">
        <div className="currency-app__title">
          <h1>Валютное веб приложение</h1>
        </div>
        <CurrencyIcons onClick={this.handleClick.bind(this)} />
        {
          this.props.eurCurrency ? (
            <CurrencyItem
              count="1"
              data={this.props.eurCurrency}
              firstCurrency={true}
            />
          ) : ''
        }
        <CurrencyItems />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    eurCurrency: state.persistedReducer.EUR,
    currency: state.persistedReducer.currency
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initCurrency: () => {
      dispatch(initCurrency());
    },
    addCurrency: data => {
      dispatch(addCurrency(data));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


