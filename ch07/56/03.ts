declare function hash(text: string): number

class PasswordChecker_ {
  checkPassword: (password: string) => boolean
  constructor(passwordHash: number) {
    this.checkPassword = (password: string) => {
      return hash(password) === passwordHash
    }
  }
}

const checker = new PasswordChecker(hash('s3cret'))
checker.checkPassword('s3cret') // Returns true

export default {}
