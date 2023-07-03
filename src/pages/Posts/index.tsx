import TopBanner from "@/Components/banner/topbanner";
import NavBar from "@/Components/navbar/navbar";
import DataImporter from "@/Components/dataimporter";
import Link from "next/link";
import BottomBanner from "@/Components/banner/bottombanner";

export default function AllPosts(){
    // Importing the List of Posts from the object
    let arrPosts = DataImporter();

    // TODO: Order Posts by Most Recent Activity

    return(
        <div>
            <TopBanner pagename="All Posts"/>
            <NavBar/>
            <p> View All posts: </p>
            <p> Search and Filter </p> 
            <p> This give you an idea? Suggest a post! (On the right)</p>
            <br/><br/>
            <ul>
                {arrPosts.map((post) => {
                return(
                    <li>
                        <p>{post.header}</p>
                        <Link href = {`../Posts/${post.id}`}> View Post </Link>
                    </li>
                    );
                })}
            </ul>
            <BottomBanner/>
        </div>
    )
}