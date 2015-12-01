'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectEmail = (function (_React$Component) {
	_inherits(CollectEmail, _React$Component);

	function CollectEmail(props) {
		_classCallCheck(this, CollectEmail);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollectEmail).call(this, props));

		_this.setEmailAddress = _this.setEmailAddress.bind(_this);
		_this.submitEmail = _this.submitEmail.bind(_this);
		return _this;
	}

	_createClass(CollectEmail, [{
		key: 'setEmailAddress',
		value: function setEmailAddress(e) {
			this.emailAddress = e.target.value;
			console.log('set email address: ', this.emailAddress);
		}
	}, {
		key: 'submitEmail',
		value: function submitEmail() {
			console.log('submitEmail', this.emailAddress);
			this.props.submit(this.emailAddress);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ style: { padding: '3em' } },
				React.createElement(
					'h2',
					null,
					'Done'
				),
				React.createElement(
					'p',
					null,
					'Thanks!'
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'h3',
						null,
						'Early Access: Data Gathering'
					),
					React.createElement(
						'p',
						null,
						'Due to the nature of the study (comparing your performance to the average performance), at least 30 data points are needed before analysis can be done. Therefore, this tool cannot give you your results immediatelly, but instead you will be asked to provide (optionally) an email address at the end, and I will email you your results.'
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'label',
						null,
						'Email Address'
					),
					React.createElement('input', { type: 'text', onChange: this.setEmailAddress, placeholder: '(optional)' })
				),
				React.createElement(
					'div',
					null,
					React.createElement('input', { type: 'submit', onClick: this.submitEmail })
				)
			);
		}
	}]);

	return CollectEmail;
})(React.Component);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Done = (function (_React$Component) {
	_inherits(Done, _React$Component);

	function Done() {
		_classCallCheck(this, Done);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Done).apply(this, arguments));
	}

	_createClass(Done, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ style: { padding: '3em' } },
				React.createElement(
					'h2',
					null,
					'Done'
				),
				React.createElement(
					'p',
					null,
					'Thanks!'
				)
			);
		}
	}]);

	return Done;
})(React.Component);
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

		_this._initState = _this._initState.bind(_this);
		_this.done = _this.done.bind(_this);
		_this.next = _this.next.bind(_this);
		_this.hasNext = _this.hasNext.bind(_this);
		_this.getNextNum = _this.getNextNum.bind(_this);
		_this.getCurrentSessionImage = _this.getCurrentSessionImage.bind(_this);
		_this.getCurrentImageIndex = _this.getCurrentImageIndex.bind(_this);

		_this.state = _this._initState(props);
		return _this;
	}

	_createClass(ImageSessionSet, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState(this._initState(nextProps));
		}
	}, {
		key: '_initState',
		value: function _initState(props) {
			var numImages = Util.objLength(props.sessionImages);
			var order = Util.getUniqueRandomNumbers(numImages, 0, numImages - 1);
			return {
				sessionImages: props.sessionImages,
				currentImageNum: 0,
				order: order
			};
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
			var numImages = Util.objLength(this.state.sessionImages);
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

	function Instructions(props) {
		_classCallCheck(this, Instructions);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).call(this, props));

		_this.start = _this.start.bind(_this);
		return _this;
	}

	_createClass(Instructions, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			key('space', this.start);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			key.unbind('space');
		}
	}, {
		key: 'start',
		value: function start() {
			if (this.props.loadingPercent != 1) return; // in case of keypress, dont start until loaded
			this.props.start();
		}
	}, {
		key: 'render',
		value: function render() {
			console.log('instructions', this.props);

			var progressContent = React.createElement(
				'div',
				null,
				'Session ',
				this.props.sessionNum,
				' / ',
				this.props.numSessions
			);

			var content = null;
			var startButtonLabel = 'Start (spacebar)';
			if (this.props.myState == 'first-instructions') {
				// first instruction, special
				startButtonLabel = 'Continue';

				content = React.createElement(
					'div',
					null,
					React.createElement(
						'h1',
						null,
						'Visual Processing Test'
					),
					React.createElement(
						'h2',
						null,
						'Introduction'
					),
					React.createElement(
						'p',
						null,
						'This test is aimed at testing your top-down visual processing ability, and should take around 10 minutes to complete.'
					),
					React.createElement(
						'h2',
						null,
						'What to expect'
					),
					React.createElement(
						'p',
						null,
						'There are ',
						this.props.numSessions,
						' sessions, and each session is broken up into three parts.'
					),
					React.createElement(
						'h3',
						null,
						'Part 1. Before'
					),
					React.createElement(
						'p',
						null,
						'A black and white image will flash in front of your eyes, very briefly, and you will then be asked if you saw a person or not. Don\'t worry if you find it difficuilt to answer, it\'s supposed to be. Then you will see the next image and be asked again, this will repeat ',
						this.props.sessionSize,
						' times.'
					),
					React.createElement('img', { src: 'res/images/example-test.png' }),
					React.createElement(
						'h3',
						null,
						'Part 2. Priming'
					),
					React.createElement(
						'p',
						null,
						'The original images will be shown to you for 2 seconds each.'
					),
					React.createElement('img', { src: 'res/images/example-template.png' }),
					React.createElement(
						'h3',
						null,
						'Part 3. After'
					),
					React.createElement(
						'p',
						null,
						'You will then again be shown the black and white images and asked the same question.'
					),
					React.createElement('img', { src: 'res/images/example-test.png' }),
					React.createElement(
						'h2',
						null,
						'Background'
					),
					React.createElement(
						'p',
						null,
						'This test is a ',
						React.createElement(
							'em',
							null,
							'limited'
						),
						' reproduction of ',
						React.createElement(
							'a',
							{ href: 'http://www.pnas.org/content/112/43/13401.abstract', target: '_blank' },
							'a recent study'
						),
						' testing a hypothesis on the nature of hallucinations.'
					),
					React.createElement(
						'p',
						null,
						'Very briefly, it attempts to explain hallucinations and related symptoms as a normal brain function (top-down visual processing) which is a little out of tune.'
					),
					React.createElement(
						'p',
						null,
						'Steven Novella of The Skeptics Guide to the Universe has a ',
						React.createElement(
							'a',
							{ href: 'http://theness.com/neurologicablog/index.php/the-nature-of-hallucinations/', target: '_blank' },
							'much better write up'
						),
						', and was the inspiration for this project.'
					),
					React.createElement(
						'h3',
						null,
						'Limitations'
					),
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							'The original study had 160 template images, which allowed for 16 sessions. This study only has 40 template images, allowing for 4 sessions. This means that resulting data will be much less accurate, and should not be taken seriously.'
						),
						React.createElement(
							'li',
							null,
							'The original study had a warmup session, this test has none (apart from the above instructions).'
						),
						React.createElement(
							'li',
							null,
							'The original study had a human supervisor, this test is done online without help.'
						),
						React.createElement(
							'li',
							null,
							'I am not a scientist, and may have made mistakes in understanding the experimental method or the analysis.'
						)
					),
					React.createElement(
						'h3',
						null,
						'Project Links'
					),
					React.createElement(
						'p',
						null,
						'The source code is available here:'
					),
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: 'https://github.com/IgorNadj/visual-processing-test', target: '_blank' },
								'Project on github'
							)
						)
					),
					React.createElement(
						'h2',
						null,
						'Early Access: Data Gathering'
					),
					React.createElement(
						'p',
						null,
						'Due to the nature of the study (comparing your performance to the average performance), at least 30 data points are needed before analysis can be done. Therefore, this tool cannot give you your results immediatelly, but instead you will be asked to provide (optionally) an email address at the end, and I will email you your results.'
					)
				);
			}
			if (this.props.myState == 'beforeBlock-instructions') {
				content = React.createElement(
					'div',
					null,
					progressContent,
					React.createElement(
						'h2',
						null,
						'Part 1. Before'
					),
					React.createElement(
						'p',
						null,
						'A black and white image will be shown very briefly, and you will be asked to answer whether you saw a person or not.'
					)
				);
			}
			if (this.props.myState == 'prime-instructions') {
				content = React.createElement(
					'div',
					null,
					progressContent,
					React.createElement(
						'h2',
						null,
						'Part 2. Priming'
					),
					React.createElement(
						'p',
						null,
						'The colour images will be displayed for two seconds each.'
					)
				);
			}
			if (this.props.myState == 'afterBlock-instructions') {
				content = React.createElement(
					'div',
					null,
					progressContent,
					React.createElement(
						'h2',
						null,
						'Part 3. After'
					),
					React.createElement(
						'p',
						null,
						'A black and white image will be shown very briefly, and you will be asked to answer whether you saw a person or not.'
					)
				);
			}

			var hasStart = this.props.loadingPercent == 1;
			var start = '';
			var loadingProgress = '';
			if (hasStart) {
				start = React.createElement(
					'a',
					{ href: '#', onClick: this.start, style: { padding: '0.5em 1em', border: '1px solid #aaa', textDecoration: 'none' } },
					startButtonLabel
				);
			} else {
				var percentRounded = Math.round(this.props.loadingPercent * 100);
				loadingProgress = React.createElement(
					'span',
					null,
					'Loading... ',
					percentRounded,
					'%'
				);
			}

			var style = { padding: '3em' };
			return React.createElement(
				'div',
				{ style: style },
				React.createElement(
					'div',
					null,
					content
				),
				React.createElement(
					'p',
					{ style: { padding: '2em', textAlign: 'center' } },
					loadingProgress,
					start
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

window.keepImageObjects = []; // attempt to prevent loading issues, store ref so it doesnt get GC

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
		value: function load(doneCallback, updateCallback) {
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
				doneCallback();
			};

			var _totalToLoad = loadQueue.length;

			var loadNext = function loadNext() {
				console.log('loadnext');

				if (loadQueue.length === 0) {
					onAllLoaded();
					return;
				}

				var _percent = (_totalToLoad - loadQueue.length) / _totalToLoad;
				updateCallback(_percent);

				var url = loadQueue.pop();
				var image = new Image();
				window.keepImageObjects.push(image);

				// image.onload = loadNext; doesnt work? need to check for complete
				var interval = setInterval(function () {
					if (image.complete) {
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
		_this.timings = {};

		_this.answer = _this.answer.bind(_this);
		_this.getCurrentImageSrc = _this.getCurrentImageSrc.bind(_this);
		return _this;
	}

	_createClass(Test, [{
		key: 'answer',
		value: function answer(answeredYes, timings) {
			console.log('answer', answeredYes, timings);
			var sessionImage = this.getCurrentSessionImage();
			this.answers[sessionImage.imageSet.id] = answeredYes;
			this.timings[sessionImage.imageSet.id] = timings;
			this.next();
		}
	}, {
		key: 'done',
		value: function done() {
			this.props.done(this.answers, this.timings);
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
		_this.getTimings = _this.getTimings.bind(_this);

		setTimeout(_this.show, 0); // TODO: do this a less hacky way
		return _this;
	}

	_createClass(TestPhoto, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// TODO: DRY
			this.setState({
				myState: 'loading',
				times: {
					init: new Date()
				}
			});
			setTimeout(this.show, 0); // TODO: do this a less hacky way
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			key('y', this.answerYes);
			key('n', this.answerNo);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			key.unbind('y');
			key.unbind('n');
		}
	}, {
		key: 'show',
		value: function show() {
			this.setState({ myState: 'show' });
			this.addTime('show');
			setTimeout(this.noise, 400);
		}
	}, {
		key: 'noise',
		value: function noise() {
			this.setState({ myState: 'noise' });
			this.addTime('noise');
			setTimeout(this.answer, 100);
		}
	}, {
		key: 'answer',
		value: function answer() {
			this.setState({ myState: 'answer' });
			this.addTime('answer');

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
		key: 'getTimings',
		value: function getTimings() {
			return {
				initialising: this.getTimeDiff(this.state.times.init, this.state.times.show),
				showing: this.getTimeDiff(this.state.times.init, this.state.times.noise),
				noising: this.getTimeDiff(this.state.times.noise, this.state.times.answer),
				answering: this.getTimeDiff(this.state.times.answer, this.state.times.done)
			};
		}
	}, {
		key: 'answerYes',
		value: function answerYes() {
			console.log('yes');
			this.addTime('done');
			this.props.done(true, this.getTimings());
		}
	}, {
		key: 'answerNo',
		value: function answerNo() {
			console.log('no');
			this.addTime('done');
			this.props.done(false, this.getTimings());
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
								'Yes (y)'
							),
							React.createElement(
								'button',
								{ onClick: this.answerNo, style: { margin: '1em' } },
								'No (n)'
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

		// TODO: this is incredibly inefficient, find a better way of getting these numbers
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
			myState: 'first-instructions',
			loadingPercent: 0,
			res: props.res,
			sessions: [],
			currentSessionIndex: 0,
			sessionSize: 10,
			numSessions: 4
		};

		var reactMethods = ['_init', '_markSessionAnswers', 'getCurrentSessionImages', 'nextSession', 'loadingDone', 'loadingUpdate', 'firstInstructionDone', 'beforeBlockStart', 'beforeBlockDone', 'primeStart', 'primeDone', 'afterBlockStart', 'afterBlockDone', 'submitData'];
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
			var order = Util.getUniqueRandomNumbers(imageSetsNeeded, 0, imageSetsNeeded - 1);
			var c = 0;
			for (var i = 0; i < this.state.numSessions; i++) {
				var session = [];
				for (var j = 0; j < this.state.sessionSize; j++) {
					var o = {
						imageSet: imageSetsArr[order[c]],
						showControl: Math.random() > 0.5, // 50% chance of getting a control, 50% of a test image
						beforeTestAnswer: null,
						afterTestAnswer: null,
						timings: {}
					};
					session.push(o);
					c++;
				}
				sessions.push(session);
			}
			this.setState({ sessions: sessions });
			console.log('sessions', sessions);

			// load images
			this.state.res.load(this.loadingDone, this.loadingUpdate);
		}
	}, {
		key: '_markSessionAnswers',
		value: function _markSessionAnswers(whichTest, answers, timings) {
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
				sessions[this.state.currentSessionIndex][i].timings = timings[sessionImage.imageSet.id];
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
		key: 'nextSession',
		value: function nextSession() {
			var nextSessionIndex = this.state.currentSessionIndex + 1;
			if (nextSessionIndex >= this.state.numSessions) {
				this.allSessionsDone();
			} else {
				this.setState({ currentSessionIndex: nextSessionIndex });
				this.setState({ myState: 'beforeBlock-instructions' });
			}
		}
	}, {
		key: 'submitData',
		value: function submitData(emailAddress) {
			console.log('submitData', emailAddress);

			this.props.db.push({
				emailAddress: emailAddress,
				data: this.state.sessions
			});

			this.setState({ myState: 'thanks' });
		}
	}, {
		key: 'loadingUpdate',
		value: function loadingUpdate(percent) {
			this.setState({ loadingPercent: percent });
		}
	}, {
		key: 'loadingDone',
		value: function loadingDone() {
			this.setState({ loadingPercent: 1 });
		}
	}, {
		key: 'firstInstructionDone',
		value: function firstInstructionDone() {
			this.setState({ myState: 'beforeBlock-instructions' });
		}
	}, {
		key: 'beforeBlockStart',
		value: function beforeBlockStart() {
			this.setState({ myState: 'beforeBlock' });
		}
	}, {
		key: 'beforeBlockDone',
		value: function beforeBlockDone(answers, timings) {
			this._markSessionAnswers('before', answers, timings);
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
		value: function afterBlockDone(answers, timings) {
			this._markSessionAnswers('after', answers, timings);
			this.nextSession();
		}
	}, {
		key: 'allSessionsDone',
		value: function allSessionsDone() {
			this.setState({ myState: 'allSessionsDone' });
		}
	}, {
		key: 'render',
		value: function render() {
			var s = this.state.myState;

			var inner = null;
			if (s == 'first-instructions' || s == 'beforeBlock-instructions' || s == 'prime-instructions' || s == 'afterBlock-instructions') {
				var onStart;
				if (s == 'first-instructions') onStart = this.firstInstructionDone;
				if (s == 'beforeBlock-instructions') onStart = this.beforeBlockStart;
				if (s == 'prime-instructions') onStart = this.primeStart;
				if (s == 'afterBlock-instructions') onStart = this.afterBlockStart;
				inner = React.createElement(Instructions, { myState: s, start: onStart, sessionNum: this.state.currentSessionIndex + 1, numSessions: this.state.numSessions, sessionSize: this.state.sessionSize, loadingPercent: this.state.loadingPercent });
			}
			if (s == 'allSessionsDone') {
				inner = React.createElement(CollectEmail, { submit: this.submitData });
			}
			if (s == 'thanks') {
				inner = React.createElement(Done, null);
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

			var style = { width: '800px', height: '600px', background: 'white', overflow: 'scroll' };
			return React.createElement(
				'div',
				{ style: style },
				inner
			);
		}
	}]);

	return VisualProcessingTest;
})(React.Component);

;
'use strict';

var res = new Resources(window.VPT_IMAGES);
var db = new Firebase('https://amber-torch-480.firebaseio.com/');

ReactDOM.render(React.createElement(VisualProcessingTest, { res: res, db: db }), document.getElementById('app'));