import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCpJNNrSsiHdQRyWhO4hdrK79f5zieLjRQ",
  authDomain: "foodiefront-rd.firebaseapp.com",
  projectId: "foodiefront-rd",
  storageBucket: "foodiefront-rd.appspot.com",
  messagingSenderId: "198192739472",
  appId: "1:198192739472:web:9cd7df617b0d277849d415"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(username, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db,"users",user.uid),{
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:"hey there",
    })
    await setDoc(doc(db,"chats",user.uid),{
      chatData:[]
    })
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
const login = async(email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
const logout=async()=>{
  try {
    await signOut(auth)
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

export {signup, login, logout,auth,db}