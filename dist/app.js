const colourLoversAPI = "http://www.colourlovers.com/api/colors";

$(document).ready(() => {
    $("#searchBtn").on("click", () => {
        let searchText = $("#searchText").val();
        let searchUrl = `${colourLoversAPI}?keywords=${searchText}&jsonCallback=?`;

        $.getJSON(searchUrl, (results) => {
            const palletTemplate = $("#palletTemplate");
            const palletHTML = palletTemplate.html().trim();
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
        });
    });
});