// export is required to export the file to the main.ts

export class Square {   
    //Properties
    private width: number;
    private height: number;

    //Constructor
    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    //Methods
    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    getArea(): number {
        return this.height * this.width;
    }
};