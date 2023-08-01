import type { User } from "@/Declarations/UserTypes";

export function initialiseUser(): User{
    return({id: '', username: '', name: '', surname: '', email: ''})
}