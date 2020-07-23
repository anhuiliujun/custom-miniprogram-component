const a = 'xxx';
Component({
  data: {
    a: 111,
  },
});

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
