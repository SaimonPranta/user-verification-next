import React, { useContext } from 'react';
import Header from '../../Components/Header/Header';
import styles from "../../styles/user.module.css";
import { userContext } from '../_app';

const index = () => {
    const [user, setUser] = useContext(userContext);
    console.log(user)
    const handleDeleteUser = () => {
        fetch(`http://localhost:8000/user/${user?._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
        })
    }


    return (
        <div>
            <Header />

            {
                user?.email ? <div className={styles.info}>
                    <h3>Name: {user.firstName} {user.lastName}</h3>
                    <h4>User Name: @{user.userName}</h4>
                    <h4>E-mail: {user.email}</h4>
                    <h4>Phone Number: {user.phoneNumber}</h4>
                    <button className={styles.buttonOne} >Edit User</button>
                    <button className={styles.buttonTwo} onClick={handleDeleteUser}>Delete User</button>
                </div> : <div className={styles.info}>
                    <h3>No User LogIn !</h3>
                </div>
            }
        </div>
    );
};

export default index;