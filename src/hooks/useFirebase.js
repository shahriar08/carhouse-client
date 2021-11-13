import { useEffect, useState } from 'react';
import {
    getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile,signOut,
    createUserWithEmailAndPassword
} from "firebase/auth";
import initializeAuthentication from '../components/Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] =useState(false);
    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = (location,history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                saveUser(user.email,user.displayName, 'PUT');
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
 
            })
            .finally(()=> setIsLoading(false));
    }

    const signInUsingForm = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        }).catch(error => {
           setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }
    const signupUsingForm = (email,password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');
                const newUser= {email, displayName: name};
                setUser(newUser);
                saveUser(email,name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setIsLoading(false));
    };

    useEffect(()=>{
        fetch(`https://powerful-beyond-86436.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // setUser({});
            })
            .catch((error) =>{

            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return() => unsubscribe;
    }, [])

    const saveUser = (email,displayName,method) =>{
        const user = {email,displayName};
        fetch('https://powerful-beyond-86436.herokuapp.com/users',{
            method: method,
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        admin,
        isLoading,
        authError,
        signupUsingForm,
        signInUsingGoogle,
        signInUsingForm,
        logOut
    }
};

export default useFirebase;