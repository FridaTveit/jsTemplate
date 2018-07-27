import { addGreetingToObject } from './greeter';

function helloWorld() {
    const objectWithoutGreeting = {
        name: 'My Object',
        id: 1
    };

    const objectWithGreeting = addGreetingToObject(objectWithoutGreeting);
    console.log(objectWithGreeting.greeting);
}

helloWorld();