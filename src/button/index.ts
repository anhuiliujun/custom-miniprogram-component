const a = 'xxx';
Component({});

interface Name {
  first: string;
  last: string;
}
interface User {
  name: Name;
}
function user(u: User) {
  console.log(u);
}

user({ name: { first: 'issac', last: 'lau' } });

console.log(a);
