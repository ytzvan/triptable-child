  (function() {
  var client = algoliasearch('CLO2E2RKP1', 'bf4587ef5d150368765803e8c74440d0');
  var index = client.initIndex('tours');
  var searchBox = jQuery('input[name=tour-search]');
  var autocompleteInstance = autocomplete(searchBox, {
    hint: false,
    debug: true
  });
});