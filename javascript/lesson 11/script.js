class BankAccount {
  #balance;
  #password;

  constructor(account, password, balance) {
    this.account = account;
    this.#password = password;
    this.#balance = balance;
  }

  get balance() {
    if (this.#balance > 0) {
      return this.#balance;
    } else {
      return "Пустой баланс.";
    }
  }

  set balance(value) {
    if (value >= this.#balance) {
      this.#balance = value;
    } else {
      alert("Не не не лучше пополняй!");
    }
  }

  deposit(amount) {
    this.#balance += typeof amount === "number" && amount >= 0 ? amount : 0;
  }

  withdraw(account, password, amount) {
    if (typeof amount === "number" && amount >= 0) {
      if (account === this.account && password === this.#password) {
        this.#balance -= amount;
      } else {
        alert("Не правильный логин или пароль.");
      }
    } else {
      alert("Введите правильное значение.");
    }
  }
}

let account = new BankAccount("123456789", "pass123", 1000);

// account.balance = 0;
// console.log(account);
// console.log(account.#balance);

// account.deposit(500);
// account.withdraw("123456789", "pass123", 200);
// console.log(account);

account.balance = 1100;
console.log(account);
