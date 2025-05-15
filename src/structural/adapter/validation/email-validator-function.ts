import isEmail from 'validator/lib/isEmail';
import type { EmailValidatorFnProtocol } from './email-validator-protocol';

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string,
): boolean => {
  return isEmail(value);
};
