import React, { useState } from "react";
import styles from './Calculator.module.css';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);

    const handleClick = (value) => {
        if (value === "C") {
            setInput("");
            setResult(0);
        } else if (value === "=") {
            try {
                // eslint-disable-next-line no-eval
                setResult(eval(input).toString());
            } catch (error) {
                setResult("Error");
            }
        } else {
            setInput(input + value);
        }

    }




    return (
        <>
            <h1 className={styles.heading}>React Calculator</h1>
            <div className={styles.row}>
                <input type="text" value={input} className={styles.input} readOnly />
            </div>
            <div>
                {result !== 0 && <span>{result}</span>}
            </div>
           <div className={styles.buttons}>
                <div className={styles.row}>
                    {["7", "8", "9", "+"].map(val => (
                        <button key={val} className={styles.button} onClick={() => handleClick(val)}>{val}</button>
                    ))}
                </div>
                <div className={styles.row}>
                    {["4", "5", "6", "-"].map(val => (
                        <button key={val} className={styles.button} onClick={() => handleClick(val)}>{val}</button>
                    ))}
                </div>
                <div className={styles.row}>
                    {["1", "2", "3", "*"].map(val => (
                        <button key={val} className={styles.button} onClick={() => handleClick(val)}>{val}</button>
                    ))}
                </div>
                <div className={styles.row}>
                    {["C", "0", "=", "/"].map(val => (
                        <button key={val} className={styles.button} onClick={() => handleClick(val)}>{val}</button>
                    ))}
                </div>                   
            </div>                
        </>
    )
}
export default Calculator;