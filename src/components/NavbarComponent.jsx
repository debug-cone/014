// router
import { NavLink } from 'react-router-dom'

function NavbarComponent() {

    // const NavItems = [
    //     {
    //         path: '/',
    //         label: 'Home'
    //     },
    //     {
    //         path: '/products',
    //         label: 'Products'
    //     },
    //     {
    //         path: '/login',
    //         label: 'Login'
    //     }
    // ]

    // functions
    function handleLogout() {
        localStorage.removeItem('user')
    }

    return (
        <div className='container mx-auto bg-teal-500 flex items-center justify-between h-[100px]'>
            <h1 className='text-3xl font-bold'>LOGO</h1>

            <ul className='flex items-center gap-5'>
                {/* {NavItems.map((el, i) => {
                    return (
                    
                    )
                })} */}
                <li>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/products'}>
                        Products
                    </NavLink>
                </li>

                {
                localStorage.hasOwnProperty('user')
                ?
                    (<li>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </li>)
                    
                :
                    (<li>
                        <NavLink to={'/login'}>
                            Login
                        </NavLink>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default NavbarComponent