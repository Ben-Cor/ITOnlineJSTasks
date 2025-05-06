export default class BankAccount {
    constructor(accountNumber, accountHolder, balance=0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    
    deposit(amount) {
        if (amount > 0) {
        this.balance += amount;
        return true;
        }
        return false;
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return true;
        }
        return false;
    }
    
    getBalance() {
        return this.balance;
    }
}