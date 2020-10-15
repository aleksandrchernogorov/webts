import { User } from './models/User';

const jamie = new User({ name: 'Jamie', age: 25 });

jamie.set({ age: 999 });

console.log(jamie.get('name'));
console.log(jamie.get('age'));
