const Tree = () => {
    const exampleObj = {
        taxi:
            "a car licensed to transport passengers in return for payment of a fare",
        food: {
            sushi:
                "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
            apple: {
                Honeycrisp:
                    "an apple cultivar developed at the MAES Horticultural Research Center",
                Fuji:
                    "an apple cultivar developed by growers at Tohoku Research Station"
            }
        }
    };
    const treeStructure = (object = {}) => {
        return (
            <div className="tree-container">
                {Object.keys(object).map((key) => {
                    return (
                        <>
                            {typeof object[key] === 'string' && (
                                <span>{key} : {object[key]}</span>
                            )}
                            <br></br>
                            {typeof object[key] === 'object' && (
                                <>
                                    <div>{key}</div>
                                    {treeStructure(object[key])}
                                </>
                            )}
                        </>
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            <h2>Tree Folder Question</h2>
            <div>
                {treeStructure(exampleObj)}
            </div>
        </div>
    )
}

export default Tree;