// interfaces in typescript

interface Transactions {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface bankAccount {
    accountNumber: number;
    accountHolderName: string;
    accountBalance: number;
    isActive: boolean;
    accountTransactions: Transactions[];
}

const Transactions1: Transactions = {
    payerAccountNumber: 123456789,
    payeeAccountNumber: 987654321
}

const bankAccount1: bankAccount = {
    accountNumber: 123456789,
    accountHolderName: "basik",
    accountBalance: 100000,
    isActive: true,
    accountTransactions: [Transactions1]

}

