import './style.css'
import BankAccount from './bankaccount.js';

const account1 = new BankAccount('123456789', 'John Doe', 1250);
const account2 = new BankAccount('987654321', 'Jane Smith', 2500);
const account3 = new BankAccount('456789123', 'Alice Johnson', 5000);
const account4 = new BankAccount('789123456', 'Bob Brown', 7500);
const account5 = new BankAccount('321654987', 'Charlie White', 10000);
const accounts = [account1, account2, account3, account4, account5];

// Function to handle login action
export function login () {
    let accountLogin = document.getElementById('accountNumber').value.toString();
    const welcomeText = document.getElementById('welcomeMessage');
    let accountexists = false;
    accounts.forEach(account => {
        if (accountLogin === account.accountNumber) {
            welcomeText.innerHTML = `<h2> Welcome ${account.accountHolder} </h2>
                                    <p> Your account number is: ${account.accountNumber} </p>
                                    <p> Select an action below </p>`;
            welcomeText.style.display = 'block';
            accountexists = true;
        } 
    });
    if (accountexists === false) {
        alert('Account not found!');
        welcomeText.style.display = 'none';
        document.getElementById('accountNumber').value = '';
    }
}
window.login = login;

// Function to handle deposit action
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

// Function to handle withdraw action
export function withdraw() {
    let accountLogin = document.getElementById('accountNumber').value.toString();
    accounts.forEach(account => {
        if (accountLogin === account.accountNumber) {
            let withdrawAmount = Number(document.getElementById('amountWithdraw').value);
            if (account.withdraw(withdrawAmount)) {
                alert('Deposit successful! New balance: ' + account.getBalance());
            } else {
                alert('Deposit failed! Please enter a valid amount.');
            }
        }
    });
}
window.withdraw = withdraw;

// Function to handle balance check action
export function checkBalance() {
    let accountLogin = document.getElementById('accountNumber').value.toString();
    accounts.forEach(account => {
        if (accountLogin === account.accountNumber) {
            alert('Your balance is: ' + account.getBalance());
        }
    });
}
window.checkBalance = checkBalance;