import React, { useMemo, useState } from "react";
import './style.css';
import usePasswordGenerator from "./use-password-generate-hook";

const checkBoxData = [
    { title: 'Include uppercase', isChecked: false },
    { title: 'Include lowercase', isChecked: false },
    { title: 'Include numbers', isChecked: false },
    { title: 'Include symbols', isChecked: false },
]

const PasswordChecker = () => {
    const [range, setRange] = useState(5);
    const [checkBoxes, setCheckBoxes] = useState(checkBoxData);

    const { password, generatePassword, errorMessage } = usePasswordGenerator();

    const handleCheckBoxChange = (index) => {
        const updatedCheckBox = [...checkBoxes];
        updatedCheckBox[index].isChecked = !updatedCheckBox[index].isChecked
        setCheckBoxes(updatedCheckBox);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
    }

    const passwordStrengthChecker = useMemo(() => {
        const passwordLength = password.length;
        if (passwordLength <= 5) {
            return "Poor";
        }
        else if (passwordLength > 5 && passwordLength < 10) {
            return "Medium";
        } else if (passwordLength > 10 && passwordLength < 15) {
            return "Strong";
        } else {
            return "Very Strong";
        }
    }, [password])

    return (
        <div className="password">
            {password && (
                <div className="password__copy">
                    <p className="password__text">{password}</p>
                    <button className="password__text password__btn" onClick={handleCopy}>Copy</button>
                </div>
            )}
            <div className="password__copy">
                <p className="password__text">Character Length</p>
                <p className="password__text">{range}</p>
            </div>
            <div>
                <input
                    className="password__range"
                    type="range"
                    min={5}
                    max={15}
                    value={range}
                    onChange={e => setRange(e.target.value)}
                />
            </div>
            <div className="password__checkbox">
                {checkBoxes.map((data, index) => {
                    return (
                        <div key={data.title}>
                            <input type="checkbox" checked={data.isChecked} onChange={() => handleCheckBoxChange(index)} />
                            <label className="password__text" style={{ marginLeft: '10px' }}>{data.title}</label>
                        </div>
                    )
                })}
            </div>
            {password && (
                <div className="password__copy">
                    <p className="password__text">Strength</p>
                    <p className="password__text">{passwordStrengthChecker}</p>
                </div>
            )}
            {errorMessage && <div className="password__text">{errorMessage}</div>}
            <button className="password__text password__btn--generate" onClick={() => generatePassword(checkBoxData, range)}>Generate Password</button>
        </div>
    )
}

export default PasswordChecker;
