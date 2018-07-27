import { getGreeting, addGreetingToObject } from '../src/greeter';

describe('When getting the greeting', () => {
    it(`returns 'Hello world'`, () => {
        const greeting = getGreeting();
        expect(greeting).toBe('Hello world');
    });
});

describe('When adding a greeting to an object', () => {
    it('returns an object with a greeting', () => {
        const objectWithoutGreeting = {};
        const objectWithGreeting = addGreetingToObject(objectWithoutGreeting);
        expect(objectWithGreeting.greeting).toBeDefined();
    });

    it(`doesn't modify the original object`, () => {
        const objectWithoutGreeting = {};
        addGreetingToObject(objectWithoutGreeting);
        expect(objectWithoutGreeting.greeting).toBeUndefined();
    });

    it(`sets the greeting to 'Hello world'`, () => {
        const objectWithoutGreeting = {};
        const objectWithGreeting = addGreetingToObject(objectWithoutGreeting);
        expect(objectWithGreeting.greeting).toBe('Hello world');
    });

    it(`overwrites any existing greeting`, () => {
        const objectWithExistingGreeting = {
            greeting: 'HELLO!!'
        };
        const objectWithNewGreeting = addGreetingToObject(objectWithExistingGreeting);
        expect(objectWithNewGreeting.greeting).toBe('Hello world');
    });
});