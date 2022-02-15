import { getCodeType } from './getCodeType';

describe('.getCodeType', () => {
  test('should detect BAR code type', () => {
    const type = getCodeType('10499898100000214032006561000100040099726390');
    expect(type).toEqual('BAR');
  });

  test('should detect LINE code type', () => {
    const type = getCodeType('10492006506100010004200997263900989810000021403');
    expect(type).toEqual('LINE');
  });
});
