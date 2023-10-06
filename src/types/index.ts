export type Category = 'all' | 'traditional' | 'farmhouse' | 'modern'

export interface Project {
    id:string,
    name:string,
    year:string,
    frontview:string,
    images:{name:string, url:string}[]
    address: string,
    category: string,
    type:string,
    kitchen?:string,
    bathroom?:string,
    livingroom?:string,
    diningroom?:string,

}

export interface Video { 
    id:number,
    title:string,
    source:string,
    poster:string
}