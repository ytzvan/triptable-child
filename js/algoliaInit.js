 jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
};

jQuery.loadScript("https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.js");
jQuery.loadScript("https://cdn.jsdelivr.net/places.js/1/placesAutocompleteDataset.min.js");
jQuery.loadScript("https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js"), initSearch();

function initSearch() {

  var client = algoliasearch('CLO2E2RKP1', 'bf4587ef5d150368765803e8c74440d0');
    var index = client.initIndex('tours');
    var searchBox = jQuery('input[name=tour-search]')[0];

    var rentalsDataset = {
    source: autocomplete.sources.hits(index, {hitsPerPage: 3}),
    displayKey: 'name',
    name: 'tours',
    templates: {
      header: '<div class="ad-example-header">Tours</div>',
      suggestion: function(suggestion) {
        console.log(suggestion);
        return '<a href="/tour/' + suggestion.slug + '"><div class="ad-example-suggestion">' +
          '<div class="row"><div class="col-md-5" style="background-image:url('+suggestion.fields.images[0].secure_url+');background-position: center;background-size: cover;height: 6em;"></div>' +
          '<div class="col-md-7">' +
             suggestion._highlightResult.name.value + '<br />' +
            '<p style="color:#666"><i class="fa fa-money" style="color:#8a7676"></i> ' + suggestion.fields.price + '$ <i class="fa fa-clock-o col-xs-offset-2" style="color:#8a7676"></i> ' + suggestion.fields.duration + ' horas</p>' +
          '</div></a>';
      }
    }
  };

    var placesDataset = placesAutocompleteDataset({
    countries: ['pa'],
    algoliasearch: algoliasearch,
    templates: {
      header: '<div class="ad-example-header">Destinos</div>'
    },
    hitsPerPage: 3
  });

  // init
  var autocompleteInstance = autocomplete(searchBox, {
    hint: false,
    debug: true,
    cssClasses: {prefix: 'ad-example'}
    }, [
    rentalsDataset, placesDataset
  ]);
};s


