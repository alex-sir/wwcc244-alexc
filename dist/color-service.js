module.exports = {
    getColors: getColors,
    searchColors: searchColors
};

const colourLoversAPI = "http://www.colourlovers.com/api/colors";

function getColors() {

}

function searchColors(query, filters = {}) {
    let queryParams = [];
    for (let key in filters) {
        // check syntax
        queryParams.push(`${key}=${filters[key]}`);
    }
    queryParams.push(`keywords=${query}`);
    queryParams.push(`jsonCallback=?`);

    let searchUrl = `${colourLoversAPI}?${queryParams.join('&')}`;

    // review promises
    return new Promise((resolve, reject) => {
        $.getJSON(searchUrl, results)
            .fail((jqxhr, textStatus, error) => {
                reject(error);
            });
    });
}