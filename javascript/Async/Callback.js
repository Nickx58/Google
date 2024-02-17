/* 
Callback will always be useful
1. Functional programming patterns
2. Event Driven programming
*/
// callback hell example
fetchRandomJoke((joke) => {
    console.log(joke);

    translateJoke(joke, (translatedJoke) => {
        console.log(translatedJoke);

        postJoke(translatedJoke, () => {
            console.log("Joke posted successfully!");
        });
    });
});