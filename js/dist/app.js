'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  * An ImageSessionSet is a common base class for dealing with sessionImages
  */

var ImageSessionSet = (function (_React$Component) {
	_inherits(ImageSessionSet, _React$Component);

	function ImageSessionSet(props) {
		_classCallCheck(this, ImageSessionSet);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageSessionSet).call(this, props));

		_this.state = {};

		_this.done = _this.done.bind(_this);
		_this.next = _this.next.bind(_this);
		_this.hasNext = _this.hasNext.bind(_this);
		_this.getNextNum = _this.getNextNum.bind(_this);
		_this.getCurrentSessionImage = _this.getCurrentSessionImage.bind(_this);
		_this.getCurrentImageIndex = _this.getCurrentImageIndex.bind(_this);
		_this.getNumStateImages = _this.getNumStateImages.bind(_this);

		// TODO: DRY with update method.
		_this.state.sessionImages = props.sessionImages;
		_this.state.currentImageNum = 0;
		var order = Util.getUniqueRandomNumbers(_this.getNumStateImages(), 0, _this.getNumStateImages() - 1);
		_this.state.order = order;
		return _this;
	}

	_createClass(ImageSessionSet, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({ sessionImages: props.sessionImages });
			this.setState({ currentImageNum: 0 });
			var order = Util.getUniqueRandomNumbers(this.getNumStateImages(), 0, this.getNumStateImages() - 1);
			this.setState({ order: order });
		}
	}, {
		key: 'done',
		value: function done() {
			throw 'implement me in subclass';
		}
	}, {
		key: 'render',
		value: function render() {
			throw 'implement me in subclass';
		}
	}, {
		key: 'next',
		value: function next() {
			if (this.hasNext()) {
				console.log('ImageSessionSet next:', this.getNextNum());
				this.setState({ currentImageNum: this.getNextNum() });
			} else {
				console.log('ImageSessionSet done');
				this.done();
			}
		}
	}, {
		key: 'hasNext',
		value: function hasNext() {
			var nextNum = this.getNextNum();
			var numImages = this.getNumStateImages();
			return nextNum < numImages;
		}
	}, {
		key: 'getNextNum',
		value: function getNextNum() {
			return this.state.currentImageNum + 1;
		}
	}, {
		key: 'getCurrentSessionImage',
		value: function getCurrentSessionImage() {
			return this.state.sessionImages[this.getCurrentImageIndex()];
		}
	}, {
		key: 'getCurrentImageIndex',
		value: function getCurrentImageIndex() {
			return this.state.order[this.state.currentImageNum];
		}
	}, {
		key: 'getNumStateImages',
		value: function getNumStateImages() {
			return Util.objLength(this.state.sessionImages);
		}
	}]);

	return ImageSessionSet;
})(React.Component);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Instructions = (function (_React$Component) {
	_inherits(Instructions, _React$Component);

	function Instructions() {
		_classCallCheck(this, Instructions);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).apply(this, arguments));
	}

	_createClass(Instructions, [{
		key: 'render',
		value: function render() {
			var content = null;
			if (this.props.myState == 'beforeBlock-instructions') {
				content = React.createElement(
					'div',
					null,
					React.createElement(
						'p',
						null,
						'This test consists of three parts.'
					),
					React.createElement(
						'ol',
						null,
						React.createElement(
							'li',
							null,
							'Test'
						),
						React.createElement(
							'li',
							null,
							'Priming'
						),
						React.createElement(
							'li',
							null,
							'Test'
						)
					),
					React.createElement(
						'p',
						null,
						'This first test involves quick flashes of 10 black and white images, and asks you to answer a simple question.'
					),
					React.createElement(
						'p',
						null,
						'Prepare to pay attention and click start.'
					)
				);
			}
			if (this.props.myState == 'prime-instructions') {
				content = React.createElement(
					'div',
					null,
					React.createElement(
						'p',
						null,
						'First test done.'
					),
					React.createElement(
						'p',
						null,
						'Next you will see the colour images which were used to generate the black and white images.'
					),
					React.createElement(
						'p',
						null,
						'Watch carefully, they will appear briefly, and without pause.'
					)
				);
			}
			if (this.props.myState == 'afterBlock-instructions') {
				content = React.createElement(
					'div',
					null,
					React.createElement(
						'p',
						null,
						'Once again, you will see quick flashes of 10 black and white images, and will be asked to answer a simple question.'
					),
					React.createElement(
						'p',
						null,
						'Prepare to pay attention and click start.'
					)
				);
			}

			return React.createElement(
				'div',
				{ style: { padding: '3em' } },
				React.createElement(
					'h2',
					null,
					'Instructions'
				),
				React.createElement(
					'div',
					null,
					content
				),
				React.createElement(
					'a',
					{ href: '#', onClick: this.props.start },
					'Start'
				)
			);
		}
	}]);

	return Instructions;
})(React.Component);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = (function (_React$Component) {
	_inherits(Loading, _React$Component);

	function Loading() {
		_classCallCheck(this, Loading);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	}

	_createClass(Loading, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"Loading..."
			);
		}
	}]);

	return Loading;
})(React.Component);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prime = (function (_ImageSessionSet) {
	_inherits(Prime, _ImageSessionSet);

	function Prime(props) {
		_classCallCheck(this, Prime);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Prime).call(this, props));

		_this.getCurrentImageSrc = _this.getCurrentImageSrc.bind(_this);
		_this.start = _this.start.bind(_this);

		setTimeout(_this.start, 0);
		return _this;
	}

	_createClass(Prime, [{
		key: 'start',
		value: function start() {
			var self = this;
			var showNextSlide = function showNextSlide() {
				if (!self.hasNext()) {
					console.log('showNextSlide, no next, returning');
					self.done();
					return;
				}
				self.next();
				setTimeout(showNextSlide, 2000);
			};
			setTimeout(showNextSlide, 2000);
		}
	}, {
		key: 'done',
		value: function done() {
			console.log('prime done yo');
			this.props.done();
		}
	}, {
		key: 'getCurrentImageSrc',
		value: function getCurrentImageSrc() {
			var sessionImage = this.getCurrentSessionImage();
			return sessionImage.imageSet.template;
		}
	}, {
		key: 'render',
		value: function render() {
			var style = { width: '800px', height: '600px', display: 'block' };
			return React.createElement('img', { style: style, src: this.getCurrentImageSrc() });
		}
	}]);

	return Prime;
})(ImageSessionSet);
"use strict";
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resources = (function () {
	function Resources(res) {
		_classCallCheck(this, Resources);

		this.noise = null;
		this.items = this._getItemsFromRes(res);
	}

	_createClass(Resources, [{
		key: 'getImageTypes',
		value: function getImageTypes() {
			return ['template', 'test', 'control'];
		}
	}, {
		key: 'getImageCategories',
		value: function getImageCategories() {
			return ['people', 'animals'];
		}

		/**
    * @return array of obj
    */

	}, {
		key: 'getItems',
		value: function getItems() {
			return this.items;
		}

		/**
    * @return string url
    */

	}, {
		key: 'getNoiseUrl',
		value: function getNoiseUrl() {
			return 'res/images/noise.jpg';
		}

		/**
    * @return void
    */

	}, {
		key: 'load',
		value: function load(callback) {
			var self = this;

			var loadQueue = [];

			// images
			var types = this.getImageTypes();
			var categories = this.getImageCategories();
			for (var i in this.items) {
				var item = this.items[i];
				for (var t in types) {
					var type = types[t];
					var url = item[type];
					loadQueue.push(url);
				}
			}

			// noise
			loadQueue.push(this.getNoiseUrl());

			console.log('loadQueue', loadQueue);

			var onAllLoaded = function onAllLoaded() {
				console.log('all loaded');
				callback();
			};

			var loadNext = function loadNext() {
				console.log('loadnext');
				if (loadQueue.length === 0) {
					onAllLoaded();
					return;
				}
				var url = loadQueue.pop();
				var image = new Image();
				image.onload = loadNext;
				image.src = url;
			};

			loadNext();
		}

		// res format: {123456: { template: 'a.jpg', test: 'b.jpg', control: 'c.jpg' }}
		// output format: {123456: { template: 'mysite.com/a.jpg', ... }}	

	}, {
		key: '_getItemsFromRes',
		value: function _getItemsFromRes(res) {
			var types = this.getImageTypes();
			for (var key in res) {
				if (res.hasOwnProperty(key)) {
					var item = res[key];
					for (var t in types) {
						var type = types[t];
						var filename = item[type];
						res[key][type] = 'res/images/' + item.category + '/' + filename;
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

	}]);

	return Resources;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = (function (_ImageSessionSet) {
	_inherits(Test, _ImageSessionSet);

	function Test(props) {
		_classCallCheck(this, Test);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Test).call(this, props));

		_this.answers = {};

		_this.answer = _this.answer.bind(_this);
		_this.getCurrentImageSrc = _this.getCurrentImageSrc.bind(_this);
		return _this;
	}

	_createClass(Test, [{
		key: 'answer',
		value: function answer(answeredYes) {
			console.log('answer', answeredYes);
			var sessionImage = this.getCurrentSessionImage();
			this.answers[sessionImage.imageSet.id] = answeredYes;
			this.next();
		}
	}, {
		key: 'done',
		value: function done() {
			this.props.done(this.answers);
		}
	}, {
		key: 'getCurrentImageSrc',
		value: function getCurrentImageSrc() {
			var sessionImage = this.getCurrentSessionImage();
			if (sessionImage.showControl) {
				return sessionImage.imageSet.control;
			} else {
				return sessionImage.imageSet.test;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(TestPhoto, { imageSrc: this.getCurrentImageSrc(), done: this.answer });
		}
	}]);

	return Test;
})(ImageSessionSet);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestPhoto = (function (_React$Component) {
	_inherits(TestPhoto, _React$Component);

	function TestPhoto(props) {
		_classCallCheck(this, TestPhoto);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TestPhoto).call(this, props));

		_this.state = {
			myState: 'loading',
			times: {
				init: new Date()
			}
		};

		_this.show = _this.show.bind(_this);
		_this.noise = _this.noise.bind(_this);
		_this.answer = _this.answer.bind(_this);
		_this.addTime = _this.addTime.bind(_this);
		_this.answerYes = _this.answerYes.bind(_this);
		_this.answerNo = _this.answerNo.bind(_this);

		// cant setState yet... so have to do a setTimeout 0 here
		setTimeout(_this.show, 0);
		return _this;
	}

	_createClass(TestPhoto, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			console.log('componentWillReceiveProps');
			this.setState({ myState: 'loading' });
			this.setState({ times: { init: new Date() } });
			setTimeout(this.show, 0);
		}
	}, {
		key: 'show',
		value: function show() {
			this.setState({ myState: 'show' });
			this.addTime('show');
			this.forceUpdate();
			setTimeout(this.noise, 400);
		}
	}, {
		key: 'noise',
		value: function noise() {
			this.setState({ myState: 'noise' });
			this.addTime('noise');
			this.forceUpdate();
			setTimeout(this.answer, 100);
		}
	}, {
		key: 'answer',
		value: function answer() {
			this.setState({ myState: 'answer' });
			this.addTime('answer');
			this.forceUpdate();

			console.log('init took: ' + this.getTimeDiff(this.state.times.init, this.state.times.show));
			console.log('show took: ' + this.getTimeDiff(this.state.times.show, this.state.times.noise));
			console.log('noise took: ' + this.getTimeDiff(this.state.times.noise, this.state.times.answer));
		}
	}, {
		key: 'addTime',
		value: function addTime(name) {
			var times = this.state.times;
			times[name] = new Date();
			this.setState({ times: times });
		}
	}, {
		key: 'getTimeDiff',
		value: function getTimeDiff(a, b) {
			return b.getTime() - a.getTime();
		}
	}, {
		key: 'answerYes',
		value: function answerYes() {
			console.log('yes');
			this.props.done(true);
		}
	}, {
		key: 'answerNo',
		value: function answerNo() {
			console.log('no');
			this.props.done(false);
		}
	}, {
		key: 'render',
		value: function render() {
			var style = { width: '800px', height: '600px', display: 'block' };
			if (this.state.myState == 'show') {
				return React.createElement('img', { style: style, src: this.props.imageSrc });
			}
			if (this.state.myState == 'noise') {
				return React.createElement('img', { style: style, src: 'res/images/noise.jpg' });
			}
			if (this.state.myState == 'answer') {
				return React.createElement(
					'div',
					{ style: style },
					React.createElement(
						'div',
						{ style: { textAlign: 'center', padding: '280px 3em' } },
						React.createElement(
							'strong',
							null,
							'Did you see a person in the photo?'
						),
						React.createElement(
							'div',
							{ style: { padding: '1em' } },
							React.createElement(
								'button',
								{ onClick: this.answerYes, style: { margin: '1em' } },
								'Yes'
							),
							React.createElement(
								'button',
								{ onClick: this.answerNo, style: { margin: '1em' } },
								'No'
							)
						)
					)
				);
			}
			return React.createElement('div', { style: style });
		}
	}]);

	return TestPhoto;
})(React.Component);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = (function () {
	function Util() {
		_classCallCheck(this, Util);
	}

	_createClass(Util, null, [{
		key: "getUniqueRandomNumbers",
		value: function getUniqueRandomNumbers(num, min, max) {
			var arr = [];
			while (arr.length < num) {
				var rand = Util.getRandomInt(min, max);
				var found = false;
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] == rand) {
						found = true;
						break;
					}
				}
				if (!found) arr.push(rand);
			}
			return arr;
		}
	}, {
		key: "getRandomInt",
		value: function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}, {
		key: "objLength",
		value: function objLength(obj) {
			return Object.keys(obj).length;
		}
	}]);

	return Util;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisualProcessingTest = (function (_React$Component) {
	_inherits(VisualProcessingTest, _React$Component);

	function VisualProcessingTest(props) {
		_classCallCheck(this, VisualProcessingTest);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VisualProcessingTest).call(this, props));

		_this.state = {
			myState: 'loading',
			res: props.res,
			sessions: [],
			currentSessionIndex: 0,
			sessionSize: 3,
			numSessions: 4
		};

		var reactMethods = ['_init', '_markSessionAnswers', 'getCurrentSessionImages', 'loadingDone', 'beforeBlockStart', 'beforeBlockDone', 'primeStart', 'primeDone', 'afterBlockStart', 'afterBlockDone'];
		for (var i in reactMethods) {
			var m = reactMethods[i];
			_this[m] = _this[m].bind(_this);
		}

		setTimeout(_this._init, 0);
		return _this;
	}

	_createClass(VisualProcessingTest, [{
		key: '_init',
		value: function _init() {
			console.log('res: ', this.state.res);

			// split image sets into 4 sessions, randomly distributed
			var sessions = [];
			var imageSets = this.state.res.getItems();
			var imageSetsArr = [];
			for (var key in imageSets) {
				if (imageSets.hasOwnProperty(key)) {
					var o = imageSets[key];
					o.id = key;
					imageSetsArr.push(o);
				}
			}
			console.log('imageSetsArr', imageSetsArr);
			var imageSetsNeeded = this.state.numSessions * this.state.sessionSize;
			var c = 0;
			for (var i = 0; i < this.state.numSessions; i++) {
				var session = [];
				for (var j = 0; j < this.state.sessionSize; j++) {
					var o = {
						imageSet: imageSetsArr[c],
						showControl: Math.random() > 0.5, // 50% chance of getting a control, 50% of a test image
						beforeTestAnswer: null,
						afterTestAnswer: null
					};
					session.push(o);
					c++;
				}
				sessions.push(session);
			}
			this.setState({ sessions: sessions });
			console.log('sessions', sessions);

			// load images
			this.state.res.load(this.loadingDone);
		}
	}, {
		key: '_markSessionAnswers',
		value: function _markSessionAnswers(whichTest, answers) {
			var answerKey;
			if (whichTest == 'before') {
				answerKey = 'beforeTestAnswer';
			} else {
				answerKey = 'afterTestAnswer';
			}
			var sessions = this.state.sessions;
			var session = sessions[this.state.currentSessionIndex];
			for (var i in session) {
				var sessionImage = session[i];
				sessions[this.state.currentSessionIndex][i][answerKey] = answers[sessionImage.imageSet.id];
			}
			console.log('sessions updated:', sessions);
			this.setState({ sessions: sessions });
		}
	}, {
		key: 'getCurrentSessionImages',
		value: function getCurrentSessionImages() {
			return this.state.sessions[this.state.currentSessionIndex];
		}
	}, {
		key: 'loadingDone',
		value: function loadingDone() {
			this.setState({ myState: 'beforeBlock-instructions' });
		}
	}, {
		key: 'beforeBlockStart',
		value: function beforeBlockStart() {
			this.setState({ myState: 'beforeBlock' });
		}
	}, {
		key: 'beforeBlockDone',
		value: function beforeBlockDone(answers) {
			this._markSessionAnswers('before', answers);
			this.setState({ myState: 'prime-instructions' });
		}
	}, {
		key: 'primeStart',
		value: function primeStart() {
			this.setState({ myState: 'prime' });
		}
	}, {
		key: 'primeDone',
		value: function primeDone() {
			this.setState({ myState: 'afterBlock-instructions' });
		}
	}, {
		key: 'afterBlockStart',
		value: function afterBlockStart() {
			this.setState({ myState: 'afterBlock' });
		}
	}, {
		key: 'afterBlockDone',
		value: function afterBlockDone(answers) {
			this._markSessionAnswers('after', answers);
			this.setState({ myState: 'done' });
		}
	}, {
		key: 'render',
		value: function render() {
			var s = this.state.myState;

			var inner = null;
			if (s == 'loading') {
				inner = React.createElement(Loading, null);
			}
			if (s == 'beforeBlock-instructions' || s == 'prime-instructions' || s == 'afterBlock-instructions') {
				var onStart;
				if (s == 'beforeBlock-instructions') onStart = this.beforeBlockStart;
				if (s == 'prime-instructions') onStart = this.primeStart;
				if (s == 'afterBlock-instructions') onStart = this.afterBlockStart;
				inner = React.createElement(Instructions, { myState: s, start: onStart });
			}
			if (s == 'beforeBlock' || s == 'afterBlock') {
				var onDone;
				if (s == 'beforeBlock') onDone = this.beforeBlockDone;
				if (s == 'afterBlock') onDone = this.afterBlockDone;
				inner = React.createElement(Test, { sessionImages: this.getCurrentSessionImages(), done: onDone });
			}
			if (s == 'prime') {
				return React.createElement(Prime, { sessionImages: this.getCurrentSessionImages(), done: this.primeDone });
			}
			if (s == 'done') {
				inner = React.createElement(
					'div',
					null,
					'done'
				);
			}
			return React.createElement(
				'div',
				{ style: { width: '800px', height: '600px', background: 'white' } },
				inner
			);
		}
	}]);

	return VisualProcessingTest;
})(React.Component);

;
'use strict';

var res = new Resources(window.VPT_IMAGES);

ReactDOM.render(React.createElement(VisualProcessingTest, { res: res }), document.getElementById('app'));