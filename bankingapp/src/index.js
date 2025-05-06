import './style.css';
import BankAccount from './bankaccount.js';

const account1 = new BankAccount('123456789', 'John Doe', 1250);
const account2 = new BankAccount('987654321', 'Jane Smith', 2500);
const account3 = new BankAccount('456789123', 'Alice Johnson', 5000);
const account4 = new BankAccount('789123456', 'Bob Brown', 7500);
const account5 = new BankAccount('321654987', 'Charlie White', 10000);
const accounts = [account1, account2, account3, account4, account5];

// Helper function to get an account by account number
function getAccount(accountNumber) {
    return accounts.find(account => account.accountNumber === accountNumber);
}

// Function to handle login action
export function login() {
    const accountLogin = document.getElementById('accountNumber').value.toString();
    const welcomeText = document.getElementById('welcomeMessage');
    const account = getAccount(accountLogin);

    if (account) {
        welcomeText.innerHTML = `<h2> Welcome ${account.accountHolder} </h2>
                                <p> Your account number is: ${account.accountNumber} </p>
                                <p> Select an action below </p>`;
        welcomeText.style.display = 'block';
    } else {
        alert('Account not found!');
        welcomeText.style.display = 'none';
        document.getElementById('accountNumber').value = '';
    }
}
window.login = login;

// Function to handle deposit action
export function deposit() {
    const accountLogin = document.getElementById('accountNumber').value.toString();
    const account = getAccount(accountLogin);

    if (account) {
        const depositAmount = Number(document.getElementById('amountDeposit').value);
        if (account.deposit(depositAmount)) {
            alert('Deposit successful! New balance: ' + account.getBalance());
        } else {
            alert('Deposit failed! Please enter a valid amount.');
        }
    } else {
        alert('Account not found!');
    }
}
window.deposit = deposit;

// Function to handle withdraw action
export function withdraw() {
    const accountLogin = document.getElementById('accountNumber').value.toString();
    const account = getAccount(accountLogin);

    if (account) {
        const withdrawAmount = Number(document.getElementById('amountWithdraw').value);
        if (account.withdraw(withdrawAmount)) {
            alert('Withdrawal successful! New balance: ' + account.getBalance());
        } else {
            alert('Withdrawal failed! Insufficient funds or invalid amount.');
        }
    } else {
        alert('Account not found!');
    }
}
window.withdraw = withdraw;

// Function to handle balance check action
export function checkBalance() {
    const accountLogin = document.getElementById('accountNumber').value.toString();
    const account = getAccount(accountLogin);

    if (account) {
        alert('Your balance is: ' + account.getBalance());
    } else {
        alert('Account not found!');
    }
}
window.checkBalance = checkBalance;

// QuerySelectorAll to get all the buttons (testing purposes)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('hover:bg-slate-500', 'hover:text-white', 'rounded-lg');
    });
});