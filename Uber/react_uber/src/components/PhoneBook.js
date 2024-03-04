const PhoneBook = () => {
    const names = ["Ava", "Anthony", "Baddon", "Baen", "Caley", "Caellum"];

    const transformNames = (nameList = []) => {
        const updatedObj = {};

        nameList.forEach((el) => {
            const firstLetter = el.substring(0, 1).toLowerCase();

            if (firstLetter in updatedObj) {
                updatedObj[firstLetter] = [...updatedObj[firstLetter], el];
            } else {
                updatedObj[firstLetter] = [el];
            }
        })
        return updatedObj
    }
    return (
        <div>
            <h2>Phone Book Question</h2>
            {Object.keys(transformNames(names)).map((element) => {
                return (
                    <div>
                        <p style={{ backgroundColor: "#808080" }}>{element}</p>
                        <div>
                            {transformNames(names)[element].map((el) => {
                                return (
                                    <div>{el}</div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PhoneBook;
