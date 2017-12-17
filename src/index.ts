class Person {
  constructor(private name: string) {
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const baylor = new Person('Baylor');
console.log(baylor.greet());
