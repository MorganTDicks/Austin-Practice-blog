import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";
import DataImporter from "@/Utilities/dataimporter";
import GenericInput from "@/Components/generic/genericinput";
import userContext from "@/Context/datawrappers/userwrapper";
import { User } from "@/Declarations/UserTypes";
import { useRouter } from "next/router";
import styles from '../../styles/components/login.module.css';

export default function UserInput(props: any){ 
    let initialvalues: User = props.initialvalues;
    const [newUser, setNewUser] = useState({...initialvalues, password: ''});
    let [isValid, setIsValid] = useState<boolean>(false);
    let contex = useContext(userContext);
    let rout = useRouter();

    // Input Checking
    useEffect(()=>{
        let timia = setTimeout(()=>{
            // Check input validity
            if ((newUser.email.indexOf('@') !== -1) && (newUser.password.length >= 8) && (newUser.name.length > 0) && (newUser.surname.length > 0)){
                setIsValid(true);
            }
        }, 500)

        return() => {
            clearTimeout(timia);
        }
    }, [newUser])

    function createUserAccountHandler(event: FormEvent<HTMLFormElement>){
            event.preventDefault();  
            
            // Calculate ID
            if (props.newuser){
                newUser.id = calcID(newUser.name, newUser.surname, contex.value);
            }
            
            // Saving new User.
            props.newuser? contex.changer(newUser): contex.updater(newUser);
            console.log(contex.value[contex.value.length]);

            // TODO: Save Password

            // Clearing the forms once the user has been added. 
            setNewUser({...(DataImporter.initialUser), password: ''});

            // redirect to the login screen
            rout.push(props.href);
    }

    function inputUpdateHandler(id: string, val: string){
        switch (id){
            case 'email':
                setNewUser((prevUser) => ({...prevUser, email: val}));
                break;
            case 'name':
                setNewUser((prevUser) => ({...prevUser, name: val}));
                break;
            case 'surname': 
                setNewUser((prevUser) => ({...prevUser, surname: val}));
                break; 
            case 'username':
                setNewUser((prevUser) => ({...prevUser, username: val}));
                break;
            case 'password': 
                setNewUser((prevUser) => ({...prevUser, password: val}));
                break; 
        } 
    }

    return(
        <>
                <Link href={props.href} className={styles.linkstuff}> {props.backto} </Link>
                <div className={styles.divstuff}>
                <p className={styles.headerstuff}> {props.purpose} </p>
                <form onSubmit={createUserAccountHandler} className={styles.formstuff}>
                    <div className={styles.forminner}>
                        <GenericInput label="E-Mail" type="email" onChange={(event: any) => inputUpdateHandler('email', event.target.value)} value={newUser.email}/> 
                    </div>
                    <div className={styles.forminner}>
                        <GenericInput label="First Name" type="text" onChange={(event: any) => inputUpdateHandler('name', event.target.value)} value={newUser.name}/>
                    </div>
                    <div className={styles.forminner}>
                        <GenericInput label="Last Name" type="text" onChange={(event: any) => inputUpdateHandler('surname', event.target.value)} value={newUser.surname}/>
                    </div> 
                    <div className={styles.forminner}> 
                        <GenericInput label="Username" type="text" onChange={(event: any) => inputUpdateHandler('username', event.target.value)} value={newUser.username}/>
                    </div>
                    <div className={styles.forminner}> 
                        <GenericInput label="Password" type="password" onChange={(event: any) => inputUpdateHandler('password', event.target.value)} value={newUser.password}/>
                    </div>
                    <button type="submit" disabled={!(isValid)} className={styles.buttonstuff} style={isValid? {color: "white", backgroundColor: "green"} : {color: "silver", backgroundColor: "grey"}}> {props.buttontext} </button>
                </form>
                </div>
        </>
    )
}

function calcID(firstname: string, surname: string, arrUsers: User[]){
    // Copy first letter of firstname
    let fnn = firstname.slice(0,1);

    // Copy first letter of lastname
    let lnn = firstname.slice(0,1);

    // Generate random number for remaining characters
    let rand = Math.floor(Math.random() * (999999 - 99999) + 99999); // Expected random between 99999 & 999999

    // Check if number already taken, if so, incriment by 1. 
    let pass = true;
    console.log(arrUsers);
    do{
        for (let u of [...arrUsers]){
            if (u.id.slice(0,2) == `${fnn}${lnn}`){
                if (+u.id.slice(3,9) == rand){
                    rand += 1; 
                    pass=false;
                }
            }
        }
    } while(!pass)

    let finalID = `${fnn}${lnn}${rand}`;

    // Sample: "AA000000"
    // Received: "AA678430"
    return(finalID);
}