declare function hash_5603(text: string): number

class PasswordChecker__5603 {
  checkPassword: (password: string) => boolean
  constructor(passwordHash: number) {
    this.checkPassword = (password: string) => {
      return hash(password) === passwordHash
    }
  }
}

const checker_5603 = new PasswordChecker(hash_5603('s3cret'))
checker.checkPassword('s3cret') // Returns true
