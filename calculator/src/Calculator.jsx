import React, { useState } from "react";
import styles from './Calculator.module.css';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);


    return (
        <>
            <h1 className={styles.heading}>React Calculator</h1>
            <table className={styles.table}>
                <tr className={styles.row}>
                    <input type="number" />
                </tr>
                <tr>
                    <button className={styles.button}>7</button>
                    <button className={styles.button}>8</button>
                    <button className={styles.button}>9</button>
                    <button className={styles.button}>+</button>
                </tr>
                <tr>
                    <button className={styles.button}>4</button>
                    <button className={styles.button}>5</button>
                    <button className={styles.button}>6</button>
                    <button className={styles.button}>-</button>
                </tr>
                <tr>
                    <button className={styles.button}>1</button>
                    <button className={styles.button}>2</button>
                    <button className={styles.button}>3</button>
                    <button className={styles.button}>*</button>
                </tr>
                <tr>
                    <button className={styles.button}>C</button>
                    <button className={styles.button}>0</button>
                    <button className={styles.button}>=</button>
                    <button className={styles.button}>/</button>
                </tr>
            </table>
        
        </>
    )
}
export default Calculator;