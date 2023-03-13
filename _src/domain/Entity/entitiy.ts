export abstract class Entity<T> {
    protected _id: number | string;
    public props: T;

    get id() {
        return this._id;
    }

    constructor(props: T, id?: number | string) {
        this.props = props;
        this._id = id ?? 0;
    }
}