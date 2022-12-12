export class AuthToken {
  static setToken(tokenKind: string, tokenContent: string) {
    localStorage.setItem(tokenKind, tokenContent);
  }

  static getToken(tokenKind: string) {
    return localStorage.getItem(tokenKind);
  }

  static deleteUserInfo() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("email");
  }
}
