import Calculator from '../Calculator/Calculator';
import styles from './Main.module.css'
import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Enter the number</h1>
                    <Calculator />
                </div>
            </main>
        )
    }
};

export default Main;