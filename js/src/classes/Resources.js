window.keepImageObjects = []; // attempt to prevent loading issues, store ref so it doesnt get GC


class Resources {

	constructor(res){
		this.noise = null;
		this.items = this._getItemsFromRes(res);	
	}

	getImageTypes(){
		return ['template', 'test', 'control'];
	}

	getImageCategories(){
		return ['people', 'animals'];
	}

	/**
	  * @return array of obj
	  */
	getItems(){
		return this.items;
	}

	/**
	  * @return string url
	  */
	getNoiseUrl(){
		return 'res/images/noise.jpg';
	}

	/**
	  * @return void
	  */
	load(doneCallback, updateCallback){
		var self = this;

		var loadQueue = [];

		// images
		var types = this.getImageTypes();
		var categories = this.getImageCategories();
		for(var i in this.items){
			var item = this.items[i];
			for(var t in types){
				var type = types[t];
				var url = item[type];
				loadQueue.push(url);
			}
		}

		// noise
		loadQueue.push(this.getNoiseUrl());

		console.log('loadQueue', loadQueue);

		var onAllLoaded = function(){
			console.log('all loaded');
			doneCallback();
		};

		var _totalToLoad = loadQueue.length;

		var loadNext = function(){
			console.log('loadnext');

			if(loadQueue.length === 0){
				onAllLoaded();
				return;
			}

			var _percent = (_totalToLoad - loadQueue.length) / _totalToLoad;
			updateCallback(_percent);

			var url = loadQueue.pop();
			var image = new Image();
			window.keepImageObjects.push(image); 
			
			// image.onload = loadNext; doesnt work? need to check for complete
			var interval = setInterval(function(){
				if (image.complete){
					clearInterval(interval);
					loadNext();
				}
			}, 200);

			image.src = url;
		};

		loadNext();
	}
	
	// res format: {123456: { template: 'a.jpg', test: 'b.jpg', control: 'c.jpg' }}
	// output format: {123456: { template: 'mysite.com/a.jpg', ... }}	
	_getItemsFromRes(res){
		var types = this.getImageTypes();
		for(var key in res){
			if(res.hasOwnProperty(key)){
				var item = res[key];
				for(var t in types){
					var type = types[t];
					var filename = item[type];
					res[key][type] = 'res/images/'+item.category+'/'+filename;
				}
			}
		}
		return res;
	}



	// _loadResources(res){
	
	// }

	// getRandomImageSubset(res, num){
	// 	var subset = {
	// 		templates: {
	// 			people: [],
	// 			animals: []
	// 		},
	// 		stimuli: {
	// 			people: [],
	// 			animals: []
	// 		}
	// 	};
	// 	var categories = this.getImageCategories();
	// 	for(var i in categories){
	// 		var category = categories[i];
	// 		var randomIndices = Util.getUniqueRandomNumbers(num, 0, res.templates[category].length - 1);
	// 		for(var j in randomIndices){
	// 			var randomIndex = randomIndices[j];
	// 			subset.templates[category].push(res.templates[category][randomIndex]);
	// 			subset.stimuli[category].push(res.stimuli[category][randomIndex]);
	// 		}
	// 	}

	// 	console.log('subset', subset);

	// 	return subset;
	// }


	

}


