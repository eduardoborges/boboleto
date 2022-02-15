import { onlyNumbers } from '../__utils';

type BillTypes =
  'SANITATION_CONTRACT' |
  'GAS_ENERGY_CONTRACT' |
  'TELECOM_CONTRACT' |
  'PREFECTURE_TAX' |
  'GOV_TAX' |
  'TRANSIT_TAX' |
  'CREDIT_CARD' |
  'BANK' |
  'OTHERS';

/**
 * Identifica o tipo de boleto inserido a partir da validação de seus dois dígitos iniciais.
 *
 * -------------
 *
 * `SANITATION_CONTRACT` = Convênio de compahias de saneamento básico.
 *
 * `GAS_ENERGY_CONTRACT` = Convênio de compahias de saneamento gás ou energia.
 *
 * `TELECOM_CONTRACT` = Convênio de compahias de telecomunicações.
 *
 * `PREFECTURE_TAX` = Arrecadação de Prefeituras.
 *
 * `GOV_TAX` = Arrecadação de orgãos governamentais
 *
 * `TRANSIT_TAX` = Arrecadação de taxas de trânsito
 *
 * `CREDIT_CARD` = Pagamentos de cartão de crédito
 *
 * `BANK` = Boletos bancários
 *
 * `OTHERS` = Outros tipos de boleto
 *
 * -------------
 * @param {string} billCode Numeração do boleto
 */
export const getBillType = (billCode: string): BillTypes => {
  const code = onlyNumbers(billCode);

  if (typeof code !== 'string') throw new TypeError('INVALID_STRING');

  if (code.substr(-14) === '00000000000000' || code.substr(5, 14) === '00000000000000') {
    return 'CREDIT_CARD';
  }

  const firstDigit = code.substr(0, 1);
  const secoundDigit = code.substr(1, 1);

  const obj : Record<number, BillTypes> = {
    1: 'PREFECTURE_TAX',
    2: 'SANITATION_CONTRACT',
    3: 'GAS_ENERGY_CONTRACT',
    4: 'TELECOM_CONTRACT',
    5: 'GOV_TAX',
    6: 'OTHERS',
    7: 'TRANSIT_TAX',
    9: 'OTHERS',
  };

  if (firstDigit === '8') return obj[secoundDigit];

  return 'BANK';
};
