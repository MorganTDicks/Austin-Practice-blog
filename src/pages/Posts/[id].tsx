import { useRouter } from "next/router";
import NavBar from "@/Components/navbar/navbar";
import TopBanner from "@/Components/banner/topbanner";
import DataImporter from "@/Components/dataimporter";

export default function Posting(){
    const router = useRouter();
    const { id } = router.query;

    let allData = DataImporter();
    let myData: Post = {id: "null", topic: "null", header: "null", body: "null"};

    for (let i of allData){
        if (i.id == id){
           myData = i;
           // Previous post = i-1 header, next post = i+1 header. 
           break; 
        }
    }


    // Import the posts array
    // Return post information using matching id in post array (Just use the variable id, as it was assigned above)

    // Return the router page
    return(
        <div>
            <TopBanner pagename= {myData.header}/>
            <NavBar/> 
            <p> back to browse posts (allign Left) </p>
            <h1> {myData.header} </h1>
            <p> Suggester Info (On the left) </p>
            <p> {myData.body} </p>
            <p> prev / next post </p>
            <p> Comments or Suggest a post!</p>
            <p> Footer Stuffs </p> 
        </div> 
    );
}