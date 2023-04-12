import Calculator from '../Calculator/Calculator';
import styles from './Main.module.css'
import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                <h1 className={styles.title}>Enter the number</h1>
                <Calculator />
            </div>
        )
    }
};

export default Main;