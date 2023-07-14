import Account from "./Account";
import Principal from "./Principal.interface";

export default class AccountPrincipalAdaptor implements Principal {
  constructor(private readonly account: Account) {}

  getUsername(): string {
    return this.account.getUsername();
  }

  getRole(): string {
    return "USER";
  }
}
