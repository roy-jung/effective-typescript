declare function hash_5605(text: string): number
class PasswordChecker_5605 {
  private password: string

  constructor() {
    this.password = 's3cret'
  }

  checkPassword(password: string) {
    return password === this.password
  }
}

const checker_5605 = new PasswordChecker_5605()
const password_5605 = (checker_5605 as any).password
