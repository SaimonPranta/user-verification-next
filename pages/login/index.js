import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import styles from '../../styles/common-form.module.css';
const index = () => {
    const [inputUser, setInputUser] = useState({})

    const handleLogIn = (e) => {
        e.preventDefault()
        if ( inputUser.email && inputUser.password) {

                fetch(`http://localhost:8000/auth/login`, {
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
            <div className='container'>
            <section className={styles.authentication} autoComplete="off">
                    <form onSubmit={handleLogIn} autoComplete="off" autoCorrect='off' id='registation_form'>
                        <h6>LogIn your account</h6>
                        <label>E-mail</label>
                        <input type="email" placeholder="Enter Your Email" name="email" value={inputUser.email ? inputUser.email : ""} required autoComplete="off" onChange={fromInputHandler} />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Your Password" name="password" value={inputUser.password ? inputUser.password : ""} required autoComplete="off" onChange={fromInputHandler} />
                        
                        <input type="submit" value="Login" />
                        <div id='sign-in-button'></div>

                    </form>
                 
                </section>
            </div>
            
        </main>
    );
};

export default index;