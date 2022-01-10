import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
// import axios from 'axios';

function CreateDataForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {

        // axios.post(`https://61d6824635f71e0017c2e65a.mockapi.io/EmployeeInfo`, {
        //     firstName,
        //     lastName,
        //     checkbox
        // })

        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='Above 18+' onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>    
        </Form>
    )
}

export default CreateDataForm




