 jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: "https://cdn.jsdelivr.net/places.js/1/placesAutocompleteDataset.min.js",
        dataType: 'script',
        success: callback,
        async: true
    });
};
function initAlgolia() {
  var client = algoliasearch('CLO2E2RKP1', 'bf4587ef5d150368765803e8c74440d0');
  var index = client.initIndex('tours');
  var searchBox = jQuery('input[name=tour-search]');
  var autocompleteInstance = autocomplete(searchBox, {
    hint: false,
    debug: true
  });
};

jQuery(document).ready(function(){
	initAlgolia();
});