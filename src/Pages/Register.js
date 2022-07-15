import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Css/Login.css';
import { collection, addDoc } from 'firebase/firestore'
import {db} from '../Database/Init-firebase';

const Register =()=>{
    const[newName, setNewName] = useState("")
    const[newAge, setNewAge] = useState()
    const[newEmail, setNewEmail] = useState("")
    const[newpassword, setNewPassword] = useState("")
    const[newrepassword, setNewRepassword] = useState("")
    const[newcity, setNewCity] = useState("")

    const userCollectionRef = collection(db,'users');


    const createUser = async()=>{
        await addDoc(userCollectionRef ,{name: newName ,age: newAge,email:newEmail,city:newcity,password:newpassword,repassword:newrepassword});
    }
    return(
        <div className="Login">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(event)=>{setNewName(event.target.value)}}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" onChange={(event)=>{setNewEmail(event.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" onChange={(event)=>{setNewAge(event.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" onChange={(event)=>{setNewCity(event.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" onChange={(event)=>{setNewPassword(event.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Re Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Password" onChange={(event)=>{setNewRepassword(event.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      
      
      <Button variant="primary" onClick={createUser}>
        Register
      </Button>
    </Form>
    <br></br>
    <p>
        {newName}<br></br>
        {newEmail}<br></br>
        {newAge}<br></br>
        {newcity}<br></br>
        {newpassword}<br></br>
        {newrepassword}<br></br>
    </p>
        </div>
    );
}
export default Register;