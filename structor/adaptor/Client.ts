import AccountService from "./AccountService";
import UserDetailsService from "./UserDetailsService";

// 다른곳에서 생성
const accountService = new AccountService();
accountService.createAccount("donghyuk", "pass1234");

// 로그인
const userDetailsService = new UserDetailsService(accountService);
const principla = userDetailsService.loginHandler("donghyuk", "pass1234");

console.log(principla);
