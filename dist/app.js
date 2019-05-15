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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwLmpzIiwiY2xpZW50L3NlcnZpY2VzL2NvbG9yLXNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgQ29sb3JTZXJ2aWNlID0gcmVxdWlyZShcIi4vc2VydmljZXMvY29sb3Itc2VydmljZVwiKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgICQoXCIjc2VhcmNoQnRuXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWFyY2hUZXh0ID0gJChcIiNzZWFyY2hUZXh0XCIpLnZhbCgpO1xyXG5cclxuICAgICAgICBDb2xvclNlcnZpY2VcclxuICAgICAgICAgICAgLnNlYXJjaENvbG9ycyhzZWFyY2hUZXh0KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhbGxldFRlbXBsYXRlID0gJChcIiNwYWxsZXRUZW1wbGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhbGxldEhUTUwgPSBwYWxsZXRUZW1wbGF0ZS5odG1sKCkudHJpbSgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSAkKFwiI291dHB1dFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2gocGFsbGV0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgJHBhbGxldCA9ICQocGFsbGV0SFRNTCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCAkcGFsbGV0SW1hZ2UgPSAkcGFsbGV0LmZpbmQoXCIucGFsbGV0LWltYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCAkcGFsbGV0TmFtZSA9ICRwYWxsZXQuZmluZChcIi5wYWxsZXQtbmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgJHBhbGxldEF1dGhvciA9ICRwYWxsZXQuZmluZChcIi5wYWxsZXQtYXV0aG9yXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkcGFsbGV0SW1hZ2UuYXR0cihcInNyY1wiLCBwYWxsZXQuaW1hZ2VVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICRwYWxsZXROYW1lLnRleHQocGFsbGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAkcGFsbGV0QXV0aG9yLnRleHQocGFsbGV0LnVzZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZCgkcGFsbGV0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdicm9rZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdldENvbG9yczogZ2V0Q29sb3JzLFxyXG4gICAgc2VhcmNoQ29sb3JzOiBzZWFyY2hDb2xvcnNcclxufTtcclxuXHJcbmNvbnN0IGNvbG91ckxvdmVyc0FQSSA9IFwiLy93d3cuY29sb3VybG92ZXJzLmNvbS9hcGkvY29sb3JzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRDb2xvcnMoKSB7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hDb2xvcnMocXVlcnksIGZpbHRlcnMgPSB7fSkge1xyXG4gICAgbGV0IHF1ZXJ5UGFyYW1zID0gW107XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gZmlsdGVycykge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zLnB1c2goYCR7a2V5fT0ke2ZpbHRlcnNba2V5XX1gKTtcclxuICAgIH1cclxuICAgIHF1ZXJ5UGFyYW1zLnB1c2goYGtleXdvcmRzPSR7cXVlcnl9YCk7XHJcbiAgICBxdWVyeVBhcmFtcy5wdXNoKGBqc29uQ2FsbGJhY2s9P2ApO1xyXG5cclxuICAgIGxldCBzZWFyY2hVcmwgPSBgJHtjb2xvdXJMb3ZlcnNBUEl9PyR7cXVlcnlQYXJhbXMuam9pbignJicpfWA7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAkLmdldEpTT04oc2VhcmNoVXJsLCByZXNvbHZlKVxyXG4gICAgICAgICAgICAuZmFpbCgoanF4aHIsIHRleHRTdGF0dXMsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Il19
