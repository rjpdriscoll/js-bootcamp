const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all');
    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch countries');
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCountry(location.country);
    return country;
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=454fe8d6b84b1c');
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Unable to fetch location');
    }
}

