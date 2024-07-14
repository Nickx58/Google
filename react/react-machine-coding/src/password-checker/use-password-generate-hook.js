import { useState } from "react";

const usePasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const generatePassword = (checkboxData, length) => {
        let charSet = '';
        let generatedPassword = '';

        const selectedOptions = checkboxData.filter(checkbox => checkbox.isChecked);
        if (selectedOptions.length === 0) {
            setPassword('');
            setErrorMessage('Please select one Option')
            return;
        }
        selectedOptions.forEach((option) => {
            switch (option.title) {
                case 'Include uppercase':
                    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    break;
                case 'Include lowercase':
                    charSet += 'abcdefghijklmnopqrstuvwxyz';
                    break;
                case 'Include numbers':
                    charSet += '0123456789';
                    break;
                case 'Include symbols':
                    charSet += '!*()@#$&';
                    break;
                default:
                    break;
            }
        })
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet[randomIndex];
        }
        console.log('ge', generatedPassword)
        setPassword(generatedPassword)
        setErrorMessage('')
    }

    return { password, generatePassword, errorMessage };
}

export default usePasswordGenerator;