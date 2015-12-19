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

		var onAllLoaded = function(){
			console.log('all loaded');
			doneCallback();
		};


		var loadQueue = [];

		// images
		var types = this.getImageTypes();
		var categories = this.getImageCategories();
		for(var i in this.items){
			var item = this.items[i];
			for(var t in types){
				var type = types[t];
				var url = item[type];
				loadQueue.push({ url: url });
			}
		}

		// noise
		loadQueue.push({ url: this.getNoiseUrl() });
		console.log('loadQueue', loadQueue);
		
		// start them off
		for(var i in loadQueue){
			var o = loadQueue[i];
			var image = new Image();
			image.src = o.url;
			window.keepImageObjects.push(image); // see above
			loadQueue[i].image = image;
		}
		
		// progress		
		var _totalToLoad = loadQueue.length;
		var _numLoaded = 0;

		var interval = setInterval(function(){
			_numLoaded = 0;
			for(var i in loadQueue){
				var image = loadQueue[i].image;
				// image.onload = loadNext; doesnt work? need to check for complete
				if (image.complete){
					_numLoaded++;
					var _percent = _numLoaded / _totalToLoad;
					updateCallback(_percent);	
				}	
			}

			if(_numLoaded == _totalToLoad){
				clearInterval(interval);
				onAllLoaded();
			}
		}, 200);
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

}


