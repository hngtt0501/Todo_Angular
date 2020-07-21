export class Todo {

    // id: number; //Timestamp
    // content: string;
    // isComplete: boolean;
    //  constructor(id:number, content: string){
    //      this.id = id;
    //      this.content = content;
    //      this.isComplete = false;
    //     }

    constructor(
        public id: number,
        public content: string,
        public isComplete: boolean = false

    ){
        
    }
       
    
}