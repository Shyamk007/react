import React from "react";
import axios from "axios";

const edit = async(_id) => {
    const boysData = ({
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
    })

    const updateelem = async(id)=>{
        axios.patch(`http://localhost:5000/${id}`,{ name ,email,password}).then(res)
    }
}

export const Update = () => {
    return (
        <section className='Update'>
                <h2>Update</h2>
                <form className='updateForm'>
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
                    <button type='button'>Submit</button>
                </form>
            </section>
      )
}
