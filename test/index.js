import assert from 'assert';
import gfinance from '../lib';

describe('gfinance', () => {
  it('this function has output', () => {
    gfinance.get(['GOOG'], assert);
  });
});
