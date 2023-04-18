// class Animal{
//     static type = ' ANIMAL '

//     voice(){
//         console.log("I am Animal");
//     }
//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
// }

// // const animal = new Animal({
// //     name:'Animal',
// //     age: 5,
// //     hasTail: true,
// // })

// class Cat extends Animal{
//     static type = "CAT";

//     constructor(options) {
//         super(options);
//         this.color = options.color;
//     };

//     voice(){
//         super.voice();
//         console.log('I am Cat');
//     };

//     get ageInfo() {
//         return this.age * 7;
//     }

//     set ageInfo(newAge){
//         this.age = newAge;
//     }
// }

// const cat = new Cat({
//     name: "Cat",
//     age: 7,
//     hasTail: true,
//     color: "black",
// })

class Component{
    constructor(selector){
        this.$el = document.guerySelector(selector)
    }

    hide(){
        this.$el.style.display = 'none';
    }

    show(){
        this.$el.style.display = 'block';

    }
}

class Box extends Component{
    constructor(options){
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + "px";
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
})