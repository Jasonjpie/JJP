export type Category = 'all' | 'traditional' | 'classic' | 'modern'

export interface Project {
    id:string,
    name:string,
    year:string,
    frontview:string,
    images:{name:string, url:string}[]
    address: string,
    category: string
}

export interface Video { 
    id:number,
    title:string,
    source:string,
    poster:string
}