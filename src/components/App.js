// create your App component here
import React, { useEffect, useState } from "react";

function App() {

    const [randomImage, setRandomImage] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((data) => {
        //name of image in the API ("message")
            setRandomImage(data.message);
        })
    });


if (!randomImage) {
    return <p>"Loading..."</p>
}

return (

<img src={randomImage} alt="A Random Dog"/>
)

}

export default App