// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class PM extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// Instructors-------------------------
const ken = new Instructor({
    name : 'Ken',
    age : 30,
    location : 'Barbados',
    gender : 'Male',
    specialty : 'Python',
    favLanguage : 'Python',
    catchPhrase : 'Just another snake in the grass.',
});

const jeff = new Instructor({
    name : 'Jeff',
    age : 44,
    location : 'Florida',
    gender : 'Male',
    specialty : 'if statements',
    catchPhrase : 'If only...',
});

// Students------------------------
const sarah = new Student({
    name : 'Sarah',
    age : '18',
    location : 'Oregon',
    gender : 'Female',
    previousBackground : 'None',
    className : 'web4',
    favSubjects : ['HTML', 'CSS', 'JavaScript'],
});

const billy = new Student({
    name : 'Billy',
    age : '22',
    location : 'Washington',
    gender : 'Male',
    previousBackground : 'C+',
    className : 'CS57',
    favSubjects : ['C+', 'C++', 'PHP'],
});

// Project Managers-----------------
const willard = new PM({
    name: 'Willard',
    age: 34,
    location: 'Indiana',
    gender: 'Male',
    specialty: 'Everything',
    favLanguage: 'CSS',
    catchPhrase: 'I am, what I am.',
    gradClassName: 'webpt12',
    favInstructor: 'Dan',
});

const sam = new PM({
    name: 'Sam',
    age: 83,
    location: 'Disney Cruise Line ',
    gender: 'Male',
    specialty: 'WebOS',
    favLanguage: 'JavaScript',
    catchPhrase: 'I\'m here to party!',
    gradClassName: 'web1',
    favInstructor: 'Ellen',
});

console.log(sarah);
ken.speak();
ken.demo('CSS');
jeff.grade(sarah, 'Higher order functions');
billy.speak();
billy.listsSubjects();
sarah.PRAssignment('For loops');
billy.sprintChallenge('JavaScript IV');
sam.standUp('webpt6_fri');
willard.debugsCode(billy, 'Classes');
console.log(sam.catchPhrase);
willard.speak();