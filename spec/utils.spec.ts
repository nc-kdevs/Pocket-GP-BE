const { expect } = require('chai');
import { formatGpData } from '../db/utils/utils';

describe('formatGpData', () => {
  it('returns array', () => {
    expect(formatGpData([])).to.be.an('array');
  });
  it('returns objects with keys gp_id, surgery_id, gp_name', () => {
    const input = [{
      gp_id: 1,
      surgery_id: 1,
      gp_name: 'a'
    }];
    expect(formatGpData(input)[0]).to.have.all.keys('gp_id', 'surgery_id', 'gp_name');
  });
});