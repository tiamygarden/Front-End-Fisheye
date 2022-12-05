export default async function fetchPhotographers() {
    // await fetch("./data/photographers.json")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //     })
    //
    //     .catch((error) => console.log("Il y a un error:" + error));
    let response = await fetch("./data/photographers.json");
    const {photographers}= await response.json();

    return photographers;

}
