import { Entity } from "../../../../../../domain/entity/Entity"

type GetInksColorsProp = {
    idSite: number
}

export class GetInksColorsModel extends Entity<GetInksColorsProp>{
    constructor(props: GetInksColorsProp) {
        super(props)
    }
}