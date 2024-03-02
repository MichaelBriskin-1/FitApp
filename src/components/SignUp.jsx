import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {

const navigate = useNavigate()

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [birthDate, setBirthDate] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [email,setEmail] = useState()
    const [medicalIssues, setMedicalIssues] = useState()

    const HandleRegister = () => {
        if (/[0-9]/.test(firstName) || /[!@#$%^&*()]/.test(firstName) || !firstName ) {
            alert('first name invalid');
            return;
        } else if (/[0-9]/.test(lastName) || /[!@#$%^&*()]/.test(lastName) || !lastName) {
            alert('last name invalid');
            return;
        } else if (password !== confirmPassword) {
            alert('password doesnt match');
            return;
        } else {
            const newUser = {
                firstName,
                lastName,
                password,
                birthDate,
                phoneNumber,
                email,
                medicalIssues,
                entries: 0,
                classesHistory: {},

            }
            props.addUser(newUser)
            navigate('/')
        }
    }
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        <h3>Welcome to FitUp </h3>
        <input type="text" onInput={(ev) => setFirstName(ev.target.value)} placeholder='first name'/>
        <input type="text" onInput={(ev) => setLastName(ev.target.value)} placeholder='last name'/>
        <input type="password" onInput={(ev) => setPassword(ev.target.value)} placeholder='password'/>
        <input type="password" onInput={(ev) => setConfirmPassword(ev.target.value)} placeholder='confirm password'/>
        <input type="date" onInput={(ev) => setBirthDate(ev.target.value)}/>
        <input type='number' onInput={(ev) => setPhoneNumber(ev.target.value)} placeholder='phone number'/>
        <input type="email" onInput={(ev) => setEmail(ev.target.value)} placeholder='email'/>
        <input type="text" onInput={(ev) => setMedicalIssues(ev.target.value)} placeholder='medical issues'/>
        <button onClick={HandleRegister}>register</button>
    </div>
  )
}
