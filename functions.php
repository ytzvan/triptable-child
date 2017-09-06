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
	    // or
	    // Register the script like this for a theme:
	    wp_register_script( 'custom-script', get_template_directory_uri() . '/js/algoliaSearch.js', true );
	 
	}

	add_action( 'wp_enqueue_scripts', 'include_js_scripts' );
?>