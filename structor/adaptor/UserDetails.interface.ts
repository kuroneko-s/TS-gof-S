import Principal from "./Principal.interface";

export default interface UserDetails {
  loginHandler(username: string, password: string): Principal;
}
