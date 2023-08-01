import type { Comments } from "@/Declarations/PostTypes";

export function initialiseComment(): Comments{
    return({
        pid: '',
        uid: '',
        likes: 0,
        body: '',
        activitydate: ''
    })
}