
export class Onglet {
    name : string
    nameNavigate :string

    constructor(name: string, nameNavigate: string) {
        this.name = name;
        this.nameNavigate = nameNavigate;
    }

    getName() : string {
        return this.name
    }
    getNameNavigate() : string {
        return this.nameNavigate
    }
}

export class Prospect{
    constructor( public id : number,
        public userName : string,
        public email : string,
        public companyName : string){}
}

export class Review {
    constructor(
        public id : number,
        public review : string,
        public note : number,
        public datePublication: string,
        public prospect : Prospect){}

    getProspect() : Prospect {
        return this.prospect
    }

    getDatePublication() : string {
        return this.datePublication.slice(0,10)
    }
    
}
export class ObjectService{
    constructor( public id : number,
        public src : string,
        public icon : string,
        public title : string,
        public description : string){}
}
