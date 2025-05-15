import isEmail from 'validator/lib/isEmail';
import type { EmailValidatorProtocol } from './email-validator-protocol';

export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
