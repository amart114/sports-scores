import React, {useEffect} from "react"

export default function Scoreboard() {
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-apisports-key", "638747f58ee4569d911ee6ad39824e64");
        
        const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://v1.basketball.api-sports.io/id=12", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }, [])

    return (
        <>
            <h1>Hello, World</h1>
        </>
    )
}