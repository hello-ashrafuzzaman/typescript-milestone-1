const userName: {
    readonly name: string;
    age: number;
    company: 'google';
    isAdmin: boolean;
} = {
    name: 'John Doe',
    age: 20,
    company: 'google',
    isAdmin: false
}


function generateAdder(a: number): (b: number) => number {

    return function (b: number) {

        return a + b;

    };

}



const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(6));