import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router'
import Header from '../../Components/Header/Header';
import styles from '../../styles/common-form.module.css';
import { userContext } from '../_app';
import cookieExpires from '../../Assets/Functions/cookieExpires';


const Index = () => {
    const [inputUser, setInputUser] = useState({})
    const [user, setUser] = useContext(userContext)
    const router = useRouter()


    const handleLogIn = (e) => {
        e.preventDefault()
        if (inputUser.email_or_phone && inputUser.password) {

            fetch(`https://userappserver.nexttcoin.com/auth/login`, {
                method: "POST",
                body: JSON.stringify(inputUser),
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.failed) {
                    }
                    if (data.data) {
                        document.cookie = `token = ${data.token}; ${cookieExpires(3)}; path=/`;
                        data.data.password = null;
                        setUser(data.data)
                        router.push("/user")
                    }

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
                        <label>E-mail or Phone Number</label>
                        <input type="text" placeholder="Enter Your Email or Phone Number" name="email_or_phone" value={inputUser.email_or_phone ? inputUser.email_or_phone : ""} required autoComplete="off" onChange={fromInputHandler} />
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

export default Index;