type NoobDeveloper = {
    name: string;
};

/* type JuniorDeveloper = {
    name: string;
    age: number;
    hobby: string;
    work: string;
}; */
type JuniorDeveloper = NoobDeveloper &{   //this is intersection type
    name: string;
    age: number;
    hobby: string;
    work: string;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {      // this is union type
    name: 'Ashrafuzzaman',
    age: 20,
    hobby: 'coding',
    work: 'Javascript'
}

    const course: string = 'Next Level Dev';