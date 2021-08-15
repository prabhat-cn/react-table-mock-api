import axios from 'axios'
import MaterialTable from 'material-table'
import React, {useEffect, useState} from 'react'

const MaterialApi = () => {

    const [allUser, setAllUser] = useState([])

    const columns = [
        {title: 'Sl.No', field: 'id'},
        {title: 'Name', field: 'name'},
        {title: 'Email', field: 'email'},
        {title: 'Phone', field: 'phone'},
        {title: 'Username', field: 'username'},
        {title: 'Website', field: 'website'},
    ]

    const userData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((responce) => {
            console.log('responce', responce.data);
            setAllUser(responce.data)
        }).catch((error) => {
            console.log('error', error);
        })
    }

    useEffect(() => {
        userData()
    }, [])


    return (
        <>
            <h2 align='center'>Material Server Api</h2>
            <MaterialTable 
                title="Olympic Data"
                columns={columns}
                data={allUser}
            />
        </>
    )
}

export default MaterialApi
