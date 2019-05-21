(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ColorService = require("./services/color-service");

$(document).ready(() => {
    $("#searchBtn").on("click", () => {
        let searchText = $("#searchText").val();

        ColorService
            .searchColors(searchText)
            .then(results => {
                const palletTemplate = $("#palletTemplate");
                const palletHTML = palletTemplate.html().trim()
                const output = $("#output");

                results.forEach(pallet => {
                    let $pallet = $(palletHTML);

                    let $palletImage = $pallet.find(".pallet-image");
                    let $palletName = $pallet.find(".pallet-name");
                    let $palletAuthor = $pallet.find(".pallet-author");

                    $palletImage.attr("src", pallet.imageUrl);
                    $palletName.text(pallet.title);
                    $palletAuthor.text(pallet.userName);

                    output.append($pallet);
                });
            })
            .catch(err => {
                alert('broke');
                console.error('failed: ', err);
            });
    });
});
},{"./services/color-service":2}],2:[function(require,module,exports){
module.exports = {
    getColors: getColors,
    searchColors: searchColors
};

const colourLoversAPI = "//www.colourlovers.com/api/colors";

function getColors() {

}

function searchColors(query, filters = {}) {
    let queryParams = [];
    for (let key in filters) {
        queryParams.push(`${key}=${filters[key]}`);
    }
    queryParams.push(`keywords=${query}`);
    queryParams.push(`jsonCallback=?`);

    let searchUrl = `${colourLoversAPI}?${queryParams.join('&')}`;

    return new Promise((resolve, reject) => {
        $.getJSON(searchUrl, resolve)
            .fail((jqxhr, textStatus, error) => {
                reject(error);
            });
    });
}
},{}]},{},[1]);
