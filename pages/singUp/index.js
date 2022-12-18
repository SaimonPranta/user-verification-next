import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import styles from '../../styles/common-form.module.css';

const index = () => {
    const [inputUser, setInputUser] = useState({});

    
    const registationFormHanle = (e) => {
        e.preventDefault()
        if (inputUser.firstName && inputUser.lastName && inputUser.phoneNumber && inputUser.email && inputUser.role && inputUser.userName && inputUser.password) {

            if (inputUser.password === inputUser.confirmPassword) {
                fetch(`http://localhost:8000/auth/signup`, {
                    method: "POST",
                    body: JSON.stringify(inputUser),
                    headers: {
                        'content-type': 'application/json; charset=UTF-8'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        // document.cookie = `token = ${data.token}; ${cookieExpires(3)}; path=/`;
                        // if (data.sucess) {
                        //     setMessage({ sucess: data.sucess })
                        // }
                        // if (data.failed) {
                        //     setMessage({ failed: data.failed })
                        // }
                        // if (data.data) {
                        //     data.data.password = null;
                        //     setUser(data.data)
                        //     navigate(from, { replace: true })
                        // }
                        
                    })
            } else {
                
            }

        } else {
           
        }
    }
    const fromInputHandler = (e) => {
        const currentInput = { ...inputUser }
        const name = e.target.name
        const value = e.target.value
        currentInput[name] = value
        setInputUser(currentInput)
    }


    return (
        <main>
            <Header />
            <div>
                <section className={styles.authentication} autoComplete="off">
                    <form onSubmit={registationFormHanle} autoComplete="off" autoCorrect='off' id='registation_form'>
                        <h6>Register an account</h6>
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" name="firstName" value={inputUser.firstName ? inputUser.firstName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                        <label>last Name</label>
                        <input type="text" placeholder="Last Name" name="lastName" value={inputUser.lastName ? inputUser.lastName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                        <label>E-mail</label>
                        <input type="email" placeholder="E-mail" name="email" value={inputUser.email ? inputUser.email : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Phone Number</label>
                        <input type="text" placeholder="Phone Number" name="phoneNumber" value={inputUser.phoneNumber ? inputUser.phoneNumber : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Role</label>
                        <input type="text" placeholder="Role" name="role" value={inputUser.role ? inputUser.role : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>User Name</label>
                        <input type="text" placeholder="@username" name="userName" value={inputUser.userName ? inputUser.userName : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="password" value={inputUser.password ? inputUser.password : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" value={inputUser.confirmPassword ? inputUser.confirmPassword : ""} required autoComplete="off" onChange={fromInputHandler} />

                        <input type="submit" value="Register account" />
                        {/* <div className='form-navigation d-flex'><p>Already have an account? <Link to="/login"><span>Login</span></Link></p></div> */}
                        <div id='sign-in-button'></div>

                    </form>

                </section>
            </div>

        </main>
    );
};

export default index;