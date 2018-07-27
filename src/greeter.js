export function addGreetingToObject(object) {
    return { ...object, greeting: getGreeting() };
}

// Exported for testing
export function getGreeting() {
    return 'Hello world';
}