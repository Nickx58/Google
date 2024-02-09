class Math {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }
}

const add2 = new Math(2, 2);
add2.add();

class BankAccount {
  constructor(accNum, accName, balance = 0) {
    this.accNum = accNum;
    this.accName = accName;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(`New Balance ${this.balance}`);
    } else {
      console.log("Cannot deposit the negative value");
    }
  }
  withdraw(amt) {
    if (amt > this.balance) {
      console.log("You don't have enough funds to withdraw");
    } else {
      this.balance -= amt;
      console.log(`New Balance ${this.balance}`);
    }
  }
}
