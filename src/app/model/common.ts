export class LoginModel {
  username: string;
  userpwd: string;

  constructor(options: {
    username?: string;
    userpwd?: string;
  } = {}) {
  this.username = options.username || '';
  this.userpwd = options.userpwd || '';
}
}


export class UserModel {
  username?: string;
}
