import React from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <a href="">User App</a>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>LogIn</a>
                    </li>
                    <li>
                        <a>SignUp</a>
                    </li>
                    <li>
                        <a>User</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;