import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    if(currentUser!==null){
        return children;
    }else{
        enqueueSnackbar('You Need to Login', {
            variant: 'error',
            anchorOrigin: {
                horizontal: 'center',
                vertical: 'top'
            }
        })
            

        return <Navigate to="/main/login" />
    }
 
}

export default UserAuth