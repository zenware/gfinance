'use strict';

import request from 'request';

class Gfinance {
  constructor() {
    this.get = this.get.bind(this);
    this._apiEndpoint = 'https://finance.google.com/finance/info';
  }

  get(tickerList = [], callback) {
    if (!tickerList.length) {
      return callback('No Stock tickers were passed');
    }

    const query = `${this._apiEndpoint}?client=node_gfinance&q=${tickerList.toString()}`;
    request(query, (error, response, body) => {
      if (error) {
        return callback(error);
      } else if (parseInt(response.statusCode, 10) !== 200) {
        return callback(`Google Finance Returned: ${response.statusCode}`);
      }

      body = this._onParse(body);
      callback(error, body);
    });
  }

  _onParse(data) {
    data = data.substr(4);
    return JSON.parse(data);
  }

}

export default new Gfinance();
