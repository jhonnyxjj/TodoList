export class Task {
    constructor(
        readonly id: number,
        public title: string,
        public description?: string,
        public completed: boolean = false
    ) { }
}