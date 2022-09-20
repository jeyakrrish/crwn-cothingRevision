import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  getDocs,
  collection,
  query,
  writeBatch,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzkEoEhkc20qV0ER5Ksc85EFNTB5qOOV4",
  authDomain: "capstone-project-7e7e3.firebaseapp.com",
  projectId: "capstone-project-7e7e3",
  storageBucket: "capstone-project-7e7e3.appspot.com",
  messagingSenderId: "153443477793",
  appId: "1:153443477793:web:369706edafcd83e1d0b660"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

//!db things
//?users
export const createUserAuthDoc = async (user, additionalInfo) => {
  if (!user) return;
  const { displayName, email, photoURL } = user;
  const userCollectionRef = collection(db, "users");
  const userDocRef = await doc(userCollectionRef, user.uid)
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    await setDoc(userDocRef,
      {
        displayName,
        createdAt: new Date(),
        email,
        photoURL,
        ...additionalInfo,
      })
  }
  return userSnapshot;
}

//? create - category
export const addCollectionAndDocs = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db); //transaction method

  objectToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLocaleLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("SHOP_DATA added to data base");
}

//? getCategories
export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querSnapshot = await getDocs(q);

  const categoryArray = querSnapshot.docs.map((doc) => doc.data());

  return categoryArray;
}

//googleProvider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
})

//popup sign in
export const signInWithGooglePopup = async () => await signInWithPopup(auth, googleProvider);

//onAuthStateChanged
export const getCurrentUser = (callback) => {
  onAuthStateChanged(auth, callback);
}

//Create user with email and password
export const signUp = async (displayName, email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  createUserAuthDoc(user, { displayName });
  console.log("Successfully signned Up");
}

//sign in with email and password
export const signIn = async (email, password) => {
  if (!email || !password) return;

  await signInWithEmailAndPassword(auth, email, password);
  console.log("Successfully signned In");
}

//signOut
export const logOut = async () => await signOut(auth);