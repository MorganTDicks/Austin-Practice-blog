import { initialiseUser } from "./userimporter";
import { initialisePost } from "./postimporter";
import { initialiseComment } from "./commentimporter";

const DataImporter = {
        initialPost: initialisePost(),
        initialUser: initialiseUser(),
        initialComment: initialiseComment()
};

export default DataImporter;
