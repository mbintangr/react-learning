/* function Hello() {
    return (
        <h1>Hello World!</h1>
    )
} */

const name = "Bintang";

const displayMessage = () => {
    return "I need help!"
}

const Hello = () => {
    return (
        <h1>Hello There! I'm {name}. {displayMessage()}</h1>
    )
}

export default Hello;