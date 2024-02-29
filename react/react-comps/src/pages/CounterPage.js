import React, { useReducer } from "react";
import Button from "../components/Button";

const reducer = (state, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            count: state.count - 1
        }
    }
    if (action.type === 'value') {
        return {
            ...state,
            value: action.payload
        }
    }
    if (action.type === 'add_value_count') {
        return {
            ...state,
            value: 0,
            count: state.count + state.value
        }
    }
    return state
}

const CounterPage = () => {

    const [state, dispatch] = useReducer(reducer, {
        count: 5,
        value: 0
    })

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({ type: 'add_value_count' })
    }
    return (
        <div>
            <h1 className="text-lg">Count is: {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
                <Button onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot value</label>
                <input
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={state.value || ''}
                    onChange={e => dispatch({ type: 'value', payload: parseInt(e.target.value) })}
                />
                <Button>Add</Button>
            </form>
        </div>
    )
}

export default CounterPage