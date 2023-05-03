function add(num1: number, num2: number): number {
    return num1 + num2;
}


const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5, 6, 7, 8, 9, 10];

const newArray = arr.map((num: number) => num * num);

// Spread operator 
const myFriends = ['a', 'b', 'c', 'd', 'e'];
const newFriends = ['aa', 'bb', 'cc', 'dd'];

myFriends.push(...newFriends);
console.log(myFriends);

// rest operater
const greeting = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi ${friend}`));

greeting('a', 'b', 'c', 'd', 'e', 'd');

// Object
const person: {
    name: string;
    balance: number;
    addBalance(money: number): number;

} = {
    name: "John",
    balance: 1000,
    addBalance(money: number): number {
        return this.balance + money;
    }
}


const person2: {
    name: string;
    balance: number;
    addBalance(money: number): string;

} = {
    name: "John",
    balance: 1000,
    addBalance(money: number) {
        return `My Money is: ${this.balance + money}`;
    }
}

const person3: {
    name: string;
    balance: number;
    addBalance(money: number): void;

} = {
    name: "John",
    balance: 1000,
    addBalance(money: number) {
        console.log(`My Money is: ${this.balance + money}`);
    }
}