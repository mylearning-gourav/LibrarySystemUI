export class BookOverview {

    private name: string;
    private author: string;
    private imagePath: string;
    
    constructor(name:string, author:string, imagePath:string) {
        this.name = name;
        this.author = author;
        this.imagePath = imagePath;
    }
}
