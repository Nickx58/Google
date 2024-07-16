import { Button } from "@chakra-ui/react"
import { useState, useEffect } from "react";

const data = {
    "India": "Delhi",
    "Sri": "Colombo",
    "USA": "New York",
    "Germany": "Berlin",
    "Africa": "Capetown"
}


const CountryCapital = () => {
    const [selectedOptions, setSelectedOption] = useState([]);
    const [cData, setCData] = useState([]);
    const [correctSelection, setCorrectSelection] = useState([]);
    const [matched, setMatched] = useState([]);

    useEffect(() => {
        const shuffled = array => {
            const shuffledArray = [...array];

            let currentIndex = array.length;
            let randomIndex = null;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
            }
            return shuffledArray;
        }
        const shuffledData = shuffled(Object.entries(data).flat());
        setCData(shuffledData)
    }, [])

    const handleButtonClick = item => {
        const newArr = selectedOptions.concat(item);
        if (newArr.length === 2) {
            const [first, second] = newArr;

            if (data[first] === second || data[second] === first) {
                setCorrectSelection(newArr);
                setTimeout(() => {
                    let matchedCopy = [...matched, ...newArr];
                    setMatched(matchedCopy);
                    setCorrectSelection([]);
                    setSelectedOption([])
                }, 1000)

            } else {
                setSelectedOption(newArr)
                setTimeout(() => {
                    setSelectedOption([])
                }, 1000)
            }
        } else {
            setSelectedOption(newArr)
        }
    }

    if (matched.length === cData.length) {
        return <div>Game Over Congrulation</div>
    }

    return (
        <div>
            <h1>Select capital</h1>
            {cData.map((item) => {
                if (matched.includes(item)) {
                    return null;
                }
                const isSelected = selectedOptions.includes(item) || correctSelection.includes(item);
                const isCorrect = correctSelection.includes(item)
                const inCorrect = selectedOptions.length === 2 && isSelected && !isCorrect

                return <Button
                    key={item}
                    onClick={() => handleButtonClick(item)}
                    margin={1}
                    isActive={isSelected}
                    variant={isCorrect ? 'solid' : 'outline'}
                    colorScheme={inCorrect ? 'red' : 'teal'}
                >
                    {item}
                </Button>
            })}
        </div>
    )
}

export default CountryCapital