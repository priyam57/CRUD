import {useState,useEffect} from 'react';

export default function Register(){
    const[crud,setCrud] = useState({name:'',email:'',password:''})
    const[register,setRegister] = useState(registData())

    function handleChange(e){
        const property = e.target.name
        setCrud({...crud,[property]:e.target.value})
    }

    function handleReg(){
        setRegister([...register,crud])
        setCrud({name:'',email:'',password:''})
    }

    useEffect(()=>{
        localStorage.setItem('token',JSON.stringify(register))
    },[register])

    function registData(){
        const local = localStorage.getItem('token')
        if(local){
            return JSON.parse(local)
        }
        else{
            return []
        }
    }
  
    return(
        <div className='Register'>
            <h1>Register-page</h1>
            <label>Name:</label>
            <input type='text' name='name' placeholder='name' onChange={handleChange} value={crud.name}/>
            <br/><br/>
            <label>email:</label>
            <input type='text' name='email' placeholder='email' onChange={handleChange} value={crud.email}/>
            <br/><br/>
            <label>Password:</label>
            <input type='password' name='password' placeholder='password' onChange={handleChange} value={crud.password}/>
            <br/><br/>
            <button className='brox' onClick={handleReg}>Register</button>
        </div>
    )
}