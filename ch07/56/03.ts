declare function hash(text: string): number;

class PasswordChecker__5603 {
  checkPassword: (password: string) => boolean;
  constructor(passwordHash: number) {
    this.checkPassword = (password: string) => {
      return hash(password) === passwordHash;
    }
  }
}

const checker_5603 = new PasswordChecker(hash('s3cret'));
checker.checkPassword('s3cret');  // Returns true
