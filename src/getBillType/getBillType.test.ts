import { getBillType } from './getBillType';

describe('.getBillType', () => {
  test('should detect GAS_ENERGY_CONTRACT', () => {
    const type = getBillType('838600000050096000190009000801782309000343062712');
    expect(type).toEqual('GAS_ENERGY_CONTRACT');
  });

  test('should detect GAS_ENERGY_CONTRACT', () => {
    const type = getBillType('838600000050096000190009000801782309000343062712');
    expect(type).toEqual('GAS_ENERGY_CONTRACT');
  });

  test('should detect CREDIT_CARD', () => {
    const type = getBillType('23794150099001980167035000211405700000000000000');
    expect(type).toEqual('CREDIT_CARD');
  });
});
