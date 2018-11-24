import React, { Component } from 'react';
import { connect } from 'react-redux';
import deleteCurrency from './../actions/deleteCurrency';
import upDateCurrency from './../actions/updateCurrency';
import UpdateIcon from './UpdateIcon';
import RemoveIcon from './RemoveIcon';

class CurrencyItem extends Component {
  deleteCurrency(e) {
    this.props.deleteCurrency(this.props.timestamp);
  }
  updateCurrency(e) {
    this.props.upDateCurrency({
      value: this.props.name,
      timestamp: this.props.timestamp
    });
  }
  render() {
    const { quotes } = this.props.data;
    const rates = Object.entries(quotes);
    return (
      <div className="currency-item">
        <span className="currency-item__count">{this.props.count}.</span>
        {
          rates ? rates.slice(0, 5).map((item, index) => {
            return (
              <div className="currency-item__rate" key={index}>
                <span>{item[0]}: </span>
                <span>{item[1]}</span>
              </div>
            )
          }) : ''
        }
        {
          this.props.firstCurrency ? '' : (
            <UpdateIcon
              onClick={this.updateCurrency.bind(this)}
            />
          )
        }
        {
          this.props.firstCurrency ? '' : (
            <RemoveIcon
              onClick={this.deleteCurrency.bind(this)}
            />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    deleteCurrency: timestamp => {
      dispatch(deleteCurrency(timestamp));
    },
    upDateCurrency: data => {
      dispatch(upDateCurrency(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyItem);

