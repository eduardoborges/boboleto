/**
 * Identifica o tipo de código inserido (se baseando na quantidade de dígitos).
 *
 * ------
 *
 * `BAR` = Código de barras
 *
 * `LINE` = Linha digitável
 *
 * @param {string} code Numeração do boleto
 */

export type CodeType = 'BAR' | 'LINE';

export function getCodeType(code: string): CodeType {
  if (typeof code !== 'string') throw new TypeError('Insira uma string válida!');

  const { length } = code.replace(/[^0-9]/g, '');

  if (length === 44) return 'BAR';
  if ([46, 47, 48].includes(length)) return 'LINE';

  throw new TypeError('INVALID_CODE');
}
