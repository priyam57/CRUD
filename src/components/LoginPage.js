import {useState} from 'react';

export default function Login(props){
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  function handleLogin(){
    const data=JSON.parse(localStorage.getItem('token'))
    for(let i=0;i<data.length;i++){
      if(data[i].email===email && data[i].password===password){
        props.setIsLoggedIn(true)
        return
      }
    }
    props.setIsLoggedIn(false)
  }
  return(
    <>
    
    <div className='login'>
     <h1>Login-Page</h1>
      <label>Email:</label>
      <input type='text' placeholder='email' onChange={handleEmail} value={email}/>
      <br/><br/>
      <label>Password:</label>
      <input type='password' placeholder='password' onChange={handlePassword} value={password}/>
      <br/><br/>
      <button className='brox' onClick = {handleLogin}>Login</button>
    </div>
    </>
  )
}