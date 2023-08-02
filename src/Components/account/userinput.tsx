import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";
import DataImporter from "@/Utilities/dataimporter";
import GenericInput from "@/Components/generic/genericinput";
import userContext from "@/Context/datawrappers/userwrapper";
import { User } from "@/Declarations/UserTypes";
import { useRouter } from "next/router";
import styles from '../../styles/components/login.module.css';
import { calcUserID, getRandomLetter } from "@/Utilities/datatools/dataitools";

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
            if ((newUser.email.indexOf('@') !== -1) && (newUser.password.length >= 8)){
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
                newUser.id = calcUserID(
                    (newUser.name? newUser.name : getRandomLetter()), 
                    (newUser.surname? newUser.surname : getRandomLetter()), 
                    contex.value
                );
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