import UserImporter from "./userimporter";
import PostImporter from "./postimporter";
import CommentImporter from "./commentimporter";

// If data not already imported, Import the backend data into the below array(s) here
// Else, return the already imported data (for efficiency :D)
// That will be handled by hooks.

const DataImporter = {
        importPosts: PostImporter(),
        importUsers: UserImporter(),
        importComments: CommentImporter()
};

export default DataImporter;