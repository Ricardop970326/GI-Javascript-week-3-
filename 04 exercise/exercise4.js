// Create a Person constructor that has three properties: name, job, and age.

class person1 {
    constructor(){
        this.name = 'ricardo';
        this.job = 'apprentice';
        this.age = 26;
    }
    list(){
        console.log(`Name: ${this.name}, Job: ${this.job}, Age: ${this.age}`)}

}

const per1 = new person1();

per1.list();


// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".


class person2 {
    constructor(){
        this.name = 'ricardo';
        this.job = 'apprentice';
        this.age = 26;
    }

    exercise(){
        console.log("I Like Jogging");
    }
}

const per2 = new person2();

per2.exercise();


// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

class person3 {
    constructor(){
        this.name = 'ricardo';
        this.job = 'apprentice';
        this.age = 26;
    }

    fetchJob(){
        console.log(`${this.name} work as an ${this.job}`);
    }
}

const per3 = new person3();

per3.fetchJob();


// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.

class person4 {
    constructor(_name, _job, _age){
        this.name = 'ricardo';
        this.job = 'apprentice';
        this.age = 26;
    }
}

class programmer1 extends person4 {
    constructor (_name, _job, _age, _languages){
        super(_name, _job, _age );
        this.languages = ['javascript', 'html', 'css'];
        this.busy = true;
    }
    list2() {
        console.log(`Name: ${this.name}, Job: ${this.job}, Age: ${this.age}, Languages: ${this.languages}`);
      }

}
const per4 = new programmer1();
per4.list2();


// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

class programmer2 extends person1 {
    constructor (){
        super('name', "job", "age" );
        this.languages = ['javascript', 'html', 'css'];
        this.busy = true;
    }
    completeTask(){
        this.busy = false;
    }

    information() {
        console.log(`Name: ${this.name}, Job: ${this.job}, Age: ${this.age}, Languages: ${this.languages}, Busy: ${this.busy}`);
      }

      acceptNewTask(){
        this.busy = true;
    }

    information2() {
        console.log(`Name: ${this.name}, Job: ${this.job}, Age: ${this.age}, Languages: ${this.languages}, Busy: ${this.busy}`);
      }
}
const per5 = new programmer2();
per5.completeTask();
per5.information(); 
per5.acceptNewTask(); 
per5.information2();

// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.

class programmer3 extends person1 {
    constructor (){
        super('name', "job", "age" );
        this.languages = ['javascript', 'html', 'css'];
        this.busy = true;
    }
    completeTask(){ 
        this.busy = false;
    }

    newOffer() {
        if (this.busy){
            console.log(`${this.name} can't accept the offer`);
        } else {
            console.log(`${this.name} is not busy can accept the offer`);
        }
    }
}

const per6 = new programmer3();
// per6.completeTask();
per6.newOffer()

// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.

class programmer4 extends person1 {
    constructor (){
        super('name', "job", "age" );
        this.languages = ['javascript', 'html', 'css'];
        this.busy = true;
    }
    completeTask(){ 
        this.busy = false;
    }

    newOffer() {
        if (this.busy){
            console.log(`${this.name} can't accept the offer`);
        } else {
            console.log(`${this.name} is not busy can accept the offer`);
        }
    };
    learnLanguage(_java, _python){
        this.languages.push('java', 'python');
        console.log(`${this.name} has learn ${'java, python'}.`);
 }
    listLanguages(){
        console.log(`${this.name} has experience in this languages: ${this.languages}.`);
    }
}

const per7 =  new programmer4();

per7.completeTask();
per7.newOffer()
per7.learnLanguage('java, python');
per7.listLanguages();

// Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? 



//