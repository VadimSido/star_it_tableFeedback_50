import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <table>
            <tr>
                <td>
                    <a href="#">Personal Cabinet</a>
                </td>
                <td>
                    <a href="#">Profile</a>
                </td>
                <td>
                    <a href="#">My Objects</a>
                </td>
                <td className={styles.active}>
                    <a href="#">My Feedbacks</a>
                </td>
            </tr>
        </table>
    );
}

export default Header;