import React, {useState,useEffectt}  from "react";
import ContactForm from "./ContactForm"
import firebaseDb from  "../firebase";

const Contacts = () => {const addOrEdit = obj=> {
                firebaseDb.child('data10').push(obj,)
            }
    return (        
            <div className="row">
                 <div>
                     <ContactForm  addOrEdit ={addOrEdit}/>
                 </div>
            </div>);
}
 export default Contacts;