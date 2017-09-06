<?php

	// start your child theme code here
	
	// custom function to disable the trim excerpt
	// add_filter('wp_trim_excerpt', 'custom_disable_trim_excerpt', 11, 2);
	// function custom_disable_trim_excerpt( $excerpt, $original ){
	// 	if( !empty($original) ){
	// 		return $original;
	// 	}
	// 	return $excerpt;
	// }	
	function include_js_scripts()
	{
		$my_js_ver  = date("ymd-Gis", get_stylesheet_directory_uri() . '/js/algoliaInit.js' );
	    // or
	    // Register the script like this for a theme:
		wp_enqueue_script( 'algoliaSearchLiteLib', 'https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js', array (), false, true);
		wp_enqueue_script( 'algoliaAutocompleteLib', 'https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.js"', array (), false, true);
		wp_enqueue_script( 'algoliaPlacesLib', 'https://cdn.jsdelivr.net/places.js/1/placesAutocompleteDataset.min.js', array (), false, true);
	    wp_enqueue_script( 'algoliaInit', get_stylesheet_directory_uri() . '/js/algoliaInit.js', false, $my_js_ver, true);
	}

	add_action( 'wp_enqueue_scripts', 'include_js_scripts' );
?>