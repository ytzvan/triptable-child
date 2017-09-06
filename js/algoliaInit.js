 jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
};


  jQuery(document). ready(function(){

    var client = algoliasearch('CLO2E2RKP1', 'bf4587ef5d150368765803e8c74440d0');
    var destinations = client.initIndex('cities');
    var regions = client.initIndex('provinces');
    var searchBox = jQuery('.tourmaster-quick-search-shortcode')[0];

    var rentalsDataset = {
    source: autocomplete.sources.hits(destinations, {hitsPerPage: 6}),
    displayKey: 'city',
    templates: {
      header: '<div class="row search-result-header">Destinos</div>',
      suggestion: function(suggestion) {
        console.log(suggestion);
        var thumb = getSmallImageFromUrl(suggestion.image);
        return '<div class="col-md-4"><a href="/destino/'+suggestion.slug+'">' +
          '<img class="result-img" src="' + thumb + '" />' +
          '<div>' +
            suggestion._highlightResult.city.value + ", "+ suggestion._highlightResult.country.value +'<br />' +
            '<small>' + suggestion._highlightResult.city.value + '</small>, ' +  '<small>' + suggestion._highlightResult.country.value + '</small>' +
          '</div>' +
          '</a></div>';
      }
    }
  };

  var regionsDataset = {
    source: autocomplete.sources.hits(regions, {hitsPerPage: 3}),
    displayKey: 'province',
    templates: {
      header: '<div class="row search-result-header">Regiones</div>',
      suggestion: function(suggestion) {
        console.log(suggestion);
        var thumb = getSmallImageFromUrl(suggestion.image);
        return '<div class="col-md-4"><a href="/destination/'+suggestion.slug+'">' +
          '<img class="result-img" src="' + thumb + '" />' +
          '<div>' +
            suggestion._highlightResult.province.value + ", "+ suggestion._highlightResult.country.value +'<br />' +
            '<small>' + suggestion._highlightResult.province.value + '</small>, ' +  '<small>' + suggestion._highlightResult.country.value + '</small>' +
          '</div>' +
          '</a></div>';
      }
    }
  };

  // init
  var autocompleteInstance = autocomplete(searchBox, {
    hint: false,
    debug: true,
    cssClasses: {prefix: 'search-result'}
    }, [
    rentalsDataset, placesDataset
  ]);

  });

  


