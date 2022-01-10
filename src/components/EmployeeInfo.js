import React, { Component } from 'react';
import { Table } from 'reactstrap';
// import axios from "axios";
import EmployeeData from './Employee.json';
import './EmployeeInfo.css';
// import { Icon } from 'semantic-ui-react'

export class EmployeeInfo extends Component {
    render() {

        const DisplayData=EmployeeData.map(
            (info)=>{
                 return(
                    <tr>
                            <td>
                                <input type="text" value={info.Name} />
                            </td>
                            <td>
                                <input type="Number" value={info.Age} />
                            </td>

                            <td>
                                <select type="select" id="select" value={info.isMarried}>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            
                            </td>

                            <td>
                                <input type="text" value={info.Address} />
                            </td>
                            <td>
                                <input type="text" value={info.Country} />
                            </td>
                        </tr>
                )
            }
        )

        return (
            <div className="container">
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                isMarried
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Country
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {DisplayData}

                    </tbody>
            </Table>

            <button className="btn btn-primary ">Save</button>
        </div>
        )
        }
}

export default EmployeeInfo




// function EmployeeInfo() {
//     const [APIData, setAPIData] = useState([]);
//             useEffect(() => {
//                 axios.get(`http://localhost:8000/DataVariable`)
//             .then((response) => {
//                 setAPIData(response.data);
//             })
//        }, [])

//         const Body = APIData.map(
//             (info) => {
//                 return (
//                     <Table.Row>
//                         <Table.Cell>{info.firstName}</Table.Cell>
//                         <Table.Cell>{info.lastName}</Table.Cell>
//                         <Table.Cell>{info.checkbox ? 'Checked': 'Unchecked'}</Table.Cell>
//                         {/* <Table.Cell className="center"><button><Icon name='edit' /></button><button><Icon name='user delete' /></button></Table.Cell> */}

//                     </Table.Row>
//                     )
//             }
//         )

//     return (
//         <div>
//                 <Table singleLine>
//                 <Table.Header>
//                     <Table.Row>
//                         <Table.HeaderCell>First Name</Table.HeaderCell>
//                         <Table.HeaderCell>Last Name</Table.HeaderCell>
//                         <Table.HeaderCell>Confirmation</Table.HeaderCell>
//                         {/* <Table.HeaderCell>Update/Delete</Table.HeaderCell> */}
//                     </Table.Row>
//                 </Table.Header>

//                 <Table.Body>
//                     {Body}
//                 </Table.Body>
//             </Table>
//             </div>
//     )
// }

// export default EmployeeInfo
