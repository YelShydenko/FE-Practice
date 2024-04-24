class BankAccount {
  constructor(email, password, first_name, last_name) {
    this.id = "id_" + Date.now() + Math.random() * 100000;
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;

    this.accountNumber = Date.now() + Math.random() * 100000;
    this.balance = 0;

    let users = localStorage.getItem("users");

    if (users) {
      users = JSON.parse(users);

      let foundUser = users.find((item) => item.email === this.email);

      if (!foundUser) {
        users.push(this);

        localStorage.setItem("users", JSON.stringify(users));
      } else {
        alert("Пользователь уже существует!");
      }
    } else {
      localStorage.setItem("users", JSON.stringify([this]));
    }
  }

  deposit(amount) {
    this.balance += typeof amount === "number" && amount >= 0 ? amount : 0;
  }

  withdraw(email, password, amount) {
    if (typeof amount === "number" && amount >= 0) {
      if (email === this.email && password === this.password) {
        this.balance -= amount;
      } else {
        alert("Не правильный логин или пароль.");
      }
    } else {
      alert("Введите правильное значение.");
    }
  }

  send(amount, target) {
    if (typeof amount === "number" && amount >= 0 && amount <= this.balance) {
      this.balance -= amount;
      target.balance += amount;
    } else {
      console.log("На счета не хватает средств!");
    }
  }
}

// let user1 = new BankAccount("john@gmail.com", "pass123", "John", "Done");
// let user2 = new BankAccount("bob@gmail.com", "pass123", "Bob", "Yan");

// user1.deposit(1500);
// console.log(user1);

// user1.send(1600, user2);
// console.log(user2);

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.querySelectorAll("input");

  let data = {};

  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];

    data[element.name] = element.value;
  }

  new BankAccount(data.email, data.password, data.first_name, data.last_name);
});
