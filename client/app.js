const ColorService = require('./services/color-service');

$(document).ready(() => {
  $('#searchBtn').on('click', () => {
    const searchText = $('#searchText').val();

    ColorService
      .searchColors(searchText)
      .then((results) => {
        const palletTemplate = $('#palletTemplate');
        const palletHTML = palletTemplate.html().trim();
        const output = $('#output');

        results.forEach((pallet) => {
          const $pallet = $(palletHTML);

          const $palletImage = $pallet.find('.pallet-image');
          const $palletName = $pallet.find('.pallet-name');
          const $palletAuthor = $pallet.find('.pallet-author');

          $palletImage.attr('src', pallet.imageUrl);
          $palletName.text(pallet.title);
          $palletAuthor.text(pallet.userName);

          output.append($pallet);
        });
      })
      .catch((err) => {
        /* eslint-disable */
        alert('broke');
        console.error('failed: ', err);
        /* eslint-enable */
      });
  });
});
