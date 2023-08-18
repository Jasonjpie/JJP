export type Category = 'all' | 'traditional' | 'classic' | 'modern'

export interface Project {
    id:string,
    name:string,
    year:string,
    frontview:string,
    images:{name:string, url:string}[]
}