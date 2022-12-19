import EmployeeCard from "./EmployeeCard";
import EmployeeEdit from "./EmployeeEdit";
import { useState } from "react";

const EmployeeList=(props)=>{

    let[displayFlag,setflag]=useState(false);
    const changeEmployee=(ob)=>{
        setflag(true);
        console.log(ob);
    }

    const deleteData=(id)=>{
        props.removeData(id);
    }

    const renderList=()=>props.employee.map((emp,index)=>{
        return <EmployeeCard key={emp.empid} employee={emp} removeEmp={deleteData} editEmployee={changeEmployee}></EmployeeCard>
    })

    return(
        <div>
            <div>
                <h1>Pise's Agency Co.Lmt Employee List</h1>
                {renderList()}
            </div>
            {displayFlag?(<div><EmployeeEdit></EmployeeEdit></div>):""};
        </div>
    )
}

export default EmployeeList;