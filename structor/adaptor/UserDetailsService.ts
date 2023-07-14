import AccountPrincipalAdaptor from "./AccountPrincipalAdaptor";
import AccountService from "./AccountService";
import Principal from "./Principal.interface";
import UserDetails from "./UserDetails.interface";

export default class UserDetailsService implements UserDetails {
  constructor(private readonly accountService: AccountService) {}

  loginHandler(username: string, password: string): Principal {
    const account = this.accountService.getAccount(username, password);

    // typeof Accoutn casting to Princpal type
    // 이때 adaptor 패턴 사용
    return new AccountPrincipalAdaptor(account);
  }
}
