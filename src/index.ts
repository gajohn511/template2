const student: Student = {
    name: 'john garzon',
    age: 25,
    language: 'english'
};

// console.log(student);

interface Student {
    name: string;
    age: number;
}

interface Student {
    language?: string;
}

const myFunc = (num: number): number => {
    return num * num;
};

export default myFunc;
