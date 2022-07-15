import React, {useEffect} from "react";
import { useState } from "react";
import { collection, getDocs,updateDoc, doc,deleteDoc } from 'firebase/firestore'
import {db} from '../Database/Init-firebase';
import { async, isEmpty } from "@firebase/util";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Update =()=>{
    const [Users, SetUsers] = useState([])
    const [count , setCount] = useState("")
    const [userupdate , setUserUpdate] = useState({
        id:'',
        name:'',
        age:''
    })

    useEffect(() => {
        const getUsers = async ()  =>{
          const userCollectionRef = await collection(db,'users');
          const data = await getDocs(userCollectionRef);
          SetUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
          console.log("Data is Get");
        }
        getUsers()
      }, []);

    const UpdateUser=async()=>{
        const userDoc = doc(db,"users",userupdate.id)
        if(isEmpty(userupdate.name)){
            const newFields = {age:userupdate.age}
            await updateDoc(userDoc,newFields)
        }
        if(isEmpty(userupdate.age)){
            const newFields = {name:userupdate.name}
            await updateDoc(userDoc,newFields)
        }
        if(isEmpty(userupdate.name && userupdate.age)){

        }
        if(!isEmpty(userupdate.age && userupdate.name)){
            const newFields = {name:userupdate.name,age:userupdate.age}
            await updateDoc(userDoc,newFields)
        }
        
        
    }
    const UpdateUserDetails=(event)=>{
        setUserUpdate({
            ...userupdate,
            id:event.target.value
            
        })
    }
    const UpdateUserDetails2=(event)=>{
        setUserUpdate({
            ...userupdate,
            name:event.target.value
            
        })
    }
    const UpdateUserDetails3=(event)=>{
        setUserUpdate({
            ...userupdate,
            age:event.target.value
            
        })
    }
    const deleteUser =async(id)=>{
        const userDoc = doc(db,'users',id)
        await deleteDoc(userDoc);
    }


    
    return(
        <div className='App'>
      <h1>This is Update Page</h1><br></br>
      <div className="Login">
            
            <Form>
            <div className="first">
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Id</Form.Label>
        <Form.Control type="text" placeholder="Enter User Id" onChange={UpdateUserDetails} />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={UpdateUserDetails2} />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" onChange={UpdateUserDetails3}/>
      </Form.Group>
      
                </div>
      <Button variant="primary" onClick={UpdateUser}>
        Set Details
      </Button>
    </Form>
        </div>
      <br></br><br></br>
      {Users.map((user) => {
        return(
          <div className='App'>
            

            <h6>User Id : {user.id}</h6>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <button onClick={()=> {deleteUser(user.id)}}>Delete User</button>
            <br></br><br></br><br></br>
            
            
          </div>
        );
      })}
      
    </div>
    );
}
export default Update;