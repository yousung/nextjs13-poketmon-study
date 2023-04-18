
interface IBasicName {
    id: number
    name: string,
    url : string
}
interface IPoketmon {
    id: number,
    base_happiness: number,
    capture_rate: number,
    names:IName[]
    genera: IGenera[]
    length: number
}

interface IGenera {
    genus: string
    language : {
        name: string,
        url : string
    }
}

interface IName {
    language : {
        name: string,
        url : string
    },
    name: string
    url : string
}