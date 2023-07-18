// Want this to replace the default page not found. TODO
import { useRouter } from "next/router";
import NavBar from "@/Components/navbar/navbar";
import TopBanner from "@/Components/banner/topbanner";
import Link from "next/link";

export default function Posting(){
    return(
        <div>
            <TopBanner pagename= "Page Not Found"/>
            <NavBar/> 
            <p> The page you have requested could not be found. </p>
            <Link href="/"> Click here to return to Homepage </Link>
        </div> 
    );
}