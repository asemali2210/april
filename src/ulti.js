import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import { useRef } from 'react';
import {firebaseConfig} from './config';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const googleProvider =   new firebase.auth.GoogleAuthProvider();
const facebookProvider =   new firebase.auth.FacebookAuthProvider();
export const signWithGoogle = ( ) => auth.signInWithPopup(googleProvider);
export const signWithFacebook = ( ) => auth.signInWithPopup(facebookProvider);

/* login */

export const handleUserProfile  = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const { uid } = userAuth
    const userRef =  firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {name, email} = userAuth;
        const timetamp = new Date();
        try{
            await userRef.set({
                name,
                email,
                date: timetamp,
                ...additionalData
            })
        } catch(err){
            console.log(err);
        }
    }
    return userRef;
}