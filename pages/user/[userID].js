import React, { useContext } from 'react';
import Header from '../../Components/Header/Header';
import styles from '../../styles/common-form.module.css';
import { userContext } from '../_app';



const EditUser = () => {
    const [user, setUser] = useContext(userContext)

    const registationFormHanle = (e) => {
        e.preventDefault()
        if (user.firstName && user.lastName && user.phoneNumber && user.email && user.role && user.userName && user.password) {

            if (user.password === user.confirmPassword) {
                fetch(`http://localhost:8000/auth/signup`, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        'content-type': 'application/json; charset=UTF-8'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        document.cookie = `token = ${data.token}; ${cookieExpires(3)}; path=/`;
                        if (data.failed) {
                            // setMessage({ failed: data.failed })
                        }
                        if (data.data) {
                            data.data.password = null;
                            setUser(data.data)
                            router.push("/user")
                        }

                    })
            } else {

            }

        } else {

        }
    }
    const fromInputHandler = (e) => {
        const currentInput = { ...user }
        const name = e.target.name
        const value = e.target.value
        currentInput[name] = value
        setUser(currentInput)
    }

    return (
        <main>
            <Header />
            <div>
                <section className={styles.authentication}>
                    <form onSubmit={registationFormHanle} autoComplete="off" autoCorrect='off' id='registation_form'>
                        <h6>Edit User account</h6>
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" name="firstName" value={user.firstName ? user.firstName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                        <label>last Name</label>
                        <input type="text" placeholder="Last Name" name="lastName" value={user.lastName ? user.lastName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                        <label>E-mail</label>
                        <input type="email" placeholder="E-mail" name="email" value={user.email ? user.email : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Phone Number</label>
                        <input type="text" placeholder="Phone Number" name="phoneNumber" value={user.phoneNumber ? user.phoneNumber : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Role</label>
                        <input type="text" placeholder="Role" name="role" value={user.role ? user.role : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>User Name</label>
                        <input type="text" placeholder="@username" name="userName" value={user.userName ? user.userName : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="password" value={user.password ? user.password : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" value={user.confirmPassword ? user.confirmPassword : ""} required autoComplete="off" onChange={fromInputHandler} />

                        <input type="submit" value="Register account" />
                        {/* <div className='form-navigation d-flex'><p>Already have an account? <Link to="/login"><span>Login</span></Link></p></div> */}
                        <div id='sign-in-button'></div>

                    </form>

                </section>
            </div>

        </main>
    );
};

export default EditUser;