import { Account, NetworkType } from 'symbol-sdk';

export default class SymbolService {
  static mock() {
    const account = Account.generateNewAccount(NetworkType.TEST_NET);
    return account.address.pretty();
  }
}
