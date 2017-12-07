(function() {
	'use strict';

	var traceroute = require('traceroute');

	var results = {};

	traceroute.trace('google.com', function(err, hops) {
		if(!err)
			//console.log(hops);
		results.google = hops.length;
		traceroute.trace('bing.com', function(err, hops) {
		if(!err)
			//console.log(hops);
			results.bing = hops.length;
			traceroute.trace('duckduckgo.com', function(err, hops) {
				if(!err)
					//console.log(hops);
				results.duckduckgo = hops.length;
			});
		});
	});
	

	console.log(results);
})();