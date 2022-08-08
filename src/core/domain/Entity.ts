export abstract class Entity<T> {
    protected _id: number;
    public props: T;

    get id() {
        return this._id;
    }

    constructor(props: T, id?: number) {
        this.props = props;
        this._id = id ?? 0;
    }

}