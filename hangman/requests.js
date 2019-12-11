const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
}

const getCountry = (countryCode, callback) => {

    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const countryNameArray = data.filter((country) => country.alpha2Code === countryCode);
            const countryName = countryNameArray.pop().name;
            callback(undefined, countryName);
        } else if (e.target.readyState === 4) {
            callback('Unable to fetch data', undefined);
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
    countryRequest.send();
}
