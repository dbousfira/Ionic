import { Step } from 'Step';

export class Rando {

    title: string;
    steps: Step[];

    constructor(title: string) {
        this.title = title;
        this.steps = [];
    }

}
