 jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
};


  jQuery(document). ready(function(){

    var client = algoliasearch('YRA8Y5OT4G', 'a42cf17e8e8502300d0591021b2037d0');
    var destinations = client.initIndex('cities');
    var regions = client.initIndex('provinces');
    var searchBox = jQuery('input[name=tour-search]')[0];

    var rentalsDataset = {
    source: autocomplete.sources.hits(destinations, {hitsPerPage: 6}),
    displayKey: 'city',
    templates: {
      header: '<div class="row search-result-header">Destinos</div>',
      suggestion: function(suggestion) {
        console.log(suggestion);
        return '<div class="col-md-4"><a href="/destino/'+suggestion.slug+'">' +
          '<img class="result-img" src="' + suggestion._highlightResult.city.image + '" />' +
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
        return '<div class="col-md-4"><a href="/destination/'+suggestion.slug+'">' +
          '<img class="result-img" src="' + suggestion._highlightResult.province.image + '" />' +
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
    rentalsDataset, regionsDataset
  ]);

  });

  


