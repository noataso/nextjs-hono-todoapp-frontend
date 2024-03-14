export type UserType={
    id:number,
    username:string,
    email:string,
    password:string,
    created_at:string,
    updated_at:string,
}

export interface TodoType{
    id:number,
    content:string,
    completed:number,
    created_at:string,
    updated_at:string,
    by_username:string,
}