import './style.css'
import BankAccount from './bankaccount.js';

const account1 = new BankAccount('123456789', 'John Doe', 1250);
const account2 = new BankAccount('987654321', 'Jane Smith', 2500);
const account3 = new BankAccount('456789123', 'Alice Johnson', 5000);
const account4 = new BankAccount('789123456', 'Bob Brown', 7500);
const account5 = new BankAccount('321654987', 'Charlie White', 10000);
const accounts = [account1, account2, account3, account4, account5];

export function login () {
    let accountLogin = document.getElementById('accountNumber').value.toString();
    if (accountLogin === account1.accountNumber) {
        alert('Welcome ' + account1.accountHolder + '!');
    } else if (accountLogin === account2.accountNumber) {
        alert('Welcome ' + account2.accountHolder + '!');
    } else if (accountLogin === account3.accountNumber) {   
        alert('Welcome ' + account3.accountHolder + '!');
    }  else if (accountLogin === account4.accountNumber) {
        alert('Welcome ' + account4.accountHolder + '!');
    } else if (accountLogin === account5.accountNumber) {
        alert('Welcome ' + account5.accountHolder + '!');
    } else {
        alert('Account not found!');
    }
}

window.login = login;

export function deposit() {
    let accountLogin = document.getElementById('accountNumber').value.toString();
    accounts.forEach(account => {
        if (accountLogin === account.accountNumber) {
            let depositAmount = Number(document.getElementById('amountDeposit').value);
            if (account.deposit(depositAmount)) {
                alert('Deposit successful! New balance: ' + account.getBalance());
            } else {
                alert('Deposit failed! Please enter a valid amount.');
            }
        }
    });
}

window.deposit = deposit;