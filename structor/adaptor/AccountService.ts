import Account from "./Account";

export default class AccountService {
  private userMap = new Map();

  createAccount(username: string, password: string): Account {
    const newAccount = new Account(username, password, "sample_1@email.com");
    this.userMap.set(username, newAccount);
    return newAccount;
  }

  getAccount(username: string, password: string): Account {
    if (this.userMap.has(username)) {
      const account: Account = this.userMap.get(username);
      if (account.getPassword() !== password) {
        throw new Error("password not match");
      }

      return account;
    } else {
      return this.createAccount(username, password);
    }
  }
}
