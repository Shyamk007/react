import {PersonCircle,PenFill,Trash} from 'react-bootstrap-icons';

const EmployeeCard=function(props){

    const editEmp=(employee)=>{
        props.editEmployee(employee);
    }

    const deleteEmp=(id)=>{
        props.removeEmp(id);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    <PersonCircle></PersonCircle>
                </div>
                <div className="col-md-7">
                    <span>{props.employee.empid}</span>&nbsp;&nbsp;
                    <span>{props.employee.ename}</span>&nbsp;&nbsp;
                    <span>{props.employee.sal}</span>&nbsp;&nbsp;
                </div>
                <div className="col-md-2" onClick={()=>{editEmp(props.employee)}}>
                    <PenFill></PenFill>
                </div>
                <div className="col-md-2" onClick={()=>{deleteEmp(props.employee.empid)}}>
                    <Trash></Trash>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard;