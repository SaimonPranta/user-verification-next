import Link from 'next/link';
import React, { useContext } from 'react';
import { userContext } from '../../pages/_app';
import styles from '../../styles/Header.module.css';

const Header = () => {
    const [user] = useContext(userContext)

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <a href="">User App</a>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    {
                        user?.firstName ? <li>
                            <Link href="/user">{user.firstName}</Link>
                        </li> : <>
                            <li>
                                <Link href="/login">LogIn</Link>
                            </li>
                            <li>
                                <Link href="/singUp">SignUp</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;