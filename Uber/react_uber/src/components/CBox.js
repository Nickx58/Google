import { useState, Fragment, useMemo, useEffect } from "react";

const colors = {
    green: 'green',
    white: 'white'
}

const boxStyle = {
    display: "inline-block",
    height: "50px",
    width: "50px",
    border: "1px solid black",
    margin: "8px"
};

const boxConfig = [
    {
        id: 1,
        color: colors.green,
        disabled: false
    },
    {
        id: 2,
        color: colors.green,
        disabled: false
    },
    {
        id: 3,
        color: colors.green,
        disabled: false
    },
    {
        id: 4,
        color: colors.green,
        disabled: false
    },
    {
        id: 5,
        color: null,
        disabled: true
    },
    {
        id: 6,
        color: null,
        disabled: true
    },
    {
        id: 7,
        color: colors.green,
        disabled: false
    },
    {
        id: 8,
        color: colors.green,
        disabled: false
    },
    {
        id: 9,
        color: colors.green,
        disabled: false
    }
]

const Box = ({ color, id, disabled, handleClick }) => {
    const style = useMemo(() => {
        return {
            ...boxStyle,
            backgroundColor: color
        }
    }, [color])
    return disabled ? null : <div style={style} onClick={() => handleClick(id)}></div>
}
const CBox = () => {
    const [boxes, setBoxes] = useState(boxConfig)
    const [stack, setStack] = useState([]);
    const isTogglingCompleted = useMemo(
        () => boxes.every((box) => box.disabled || box.color === colors.white),
        [boxes]
    );
    const handleClick = id => {
        setStack((prevStack) => {
            return [
                { id: id, prevColor: boxes.find((box) => box.id === id).color },
                ...prevStack
            ]
        })
        setBoxes((prevBoxes) => {
            const updatedBox = prevBoxes.map((box) => {
                if (box.id !== id) {
                    return box;
                }
                return {
                    ...box,
                    color: box.color === colors.green ? colors.white : colors.green
                }
            })
            return updatedBox
        })
    }

    useEffect(() => {
        if (isTogglingCompleted) {
            stack.forEach((item, index) => {
                setTimeout(() => {
                    setBoxes((prevBox) => {
                        const updatedBox = prevBox.map((b) => {
                            if (b.id !== item.id) {
                                return b;
                            }
                            return {
                                ...b,
                                color: item.prevColor
                            }
                        })
                        return updatedBox
                    })
                }, (index + 1) * 1000)
            })
        }
    }, [stack, isTogglingCompleted])
    return (
        <div>
            {boxes.map((box, index) => {
                return (
                    <Fragment key={box.id}>
                        <Box
                            color={box.color}
                            disabled={box.disabled}
                            id={box.id}
                            handleClick={handleClick}
                        />
                        {(index + 1) % 3 === 0 && <br />}
                    </Fragment>
                )
            })}
        </div>
    )

}

export default CBox;
