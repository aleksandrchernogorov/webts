import { User } from './models/User';

const user = new User({ name: 'NewRecord', age: 0 });

user.events.on('change', () => {
  console.log('change occured')
})

user.events.trigger('change');