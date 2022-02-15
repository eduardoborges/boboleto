/* eslint-disable */
export const onlyNumbers = (str: string = '') => str.replace(/[^0-9]/g, '');

export const onlyDigits = (str: string = '') => str.replace(/[^\d]/gi, '');