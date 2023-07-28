import type { Post } from "@/Declarations/PostTypes";

export function initialisePost(): Post{
    return({id:'', topic: '', postdate: '', header: '', body: ''});
}