// const person: {
//     name: string;
//     age: number;
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Brittany',
    age: 29,
    hobbies: ['Sleeping', 'Coding'],
    role: Role.ADMIN
};

// person.role.push('admin');

let favoriteActivites: string[];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}