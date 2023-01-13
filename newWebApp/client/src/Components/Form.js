import React from 'react'
import axios from 'axios'
import './Form.css';

const post = () => {
    const boysData = ({
     name:document.getElementById('name').value,
     email:document.getElementById('email').value,
     password:document.getElementById('password').value,
    })

    axios.post(`http://localhost:5000/postdata`,boysData).then(
        (res)=>{
            alert("data added successfully");
        }
    )
}

export default function Form(){
  return (
    <section className='SignIn'>
            <h2>SignIn</h2>
            <form className='SignInForm'>
                <table>
                    <tr>
                        <th>Name</th>
                        <td><input type="text" id="name"/></td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td><input type="text" id="email" /></td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td><input type="text" id="password"/></td>
                    </tr>
                </table>
                <button type='button' onClick={post}>Submit</button>
            </form>
        </section>
  )
}
