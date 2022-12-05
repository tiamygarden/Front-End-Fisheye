export default async function fetchFromSource() {
    let data = {};

    try {
        const response = await fetch("./data/photographers.json");
        data= await response.json();

    }
    catch (error) {console.error(error);}

    return data;
}
