

// router
import { Navigate } from 'react-router-dom'

function AuthGuarding({children}) {

    function checkLogin(){
        if(localStorage.hasOwnProperty('user')){
            return localStorage.getItem('user')
        }
    }

    return (
        checkLogin() 
        ?
            (children)
        :
            (<Navigate to='/login' />)
    )
}

export default AuthGuarding