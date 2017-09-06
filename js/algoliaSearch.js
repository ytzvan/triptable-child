 jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
};

jQuery.loadScript("https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js");
jQuery.loadScript("https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.js");
jQuery.loadScript("https://cdn.jsdelivr.net/places.js/1/placesAutocompleteDataset.min.js");


jQuery(document).ready(function(){
	var client = algoliasearch('CLO2E2RKP1', 'bf4587ef5d150368765803e8c74440d0');
  var index = client.initIndex('tours');
  var searchBox = jQuery('input[name=tour-search]');
  var autocompleteInstance = autocomplete(searchBox, {
    hint: false,
    debug: true
  });
});