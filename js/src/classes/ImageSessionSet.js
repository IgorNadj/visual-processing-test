

/**
  * An ImageSessionSet is a common base class for dealing with sessionImages
  */
class ImageSessionSet extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {};

		this._initState = this._initState.bind(this);
		this.done = this.done.bind(this);
		this.next = this.next.bind(this);
		this.hasNext = this.hasNext.bind(this);
		this.getNextNum = this.getNextNum.bind(this);
		this.getCurrentSessionImage = this.getCurrentSessionImage.bind(this);
		this.getCurrentImageIndex = this.getCurrentImageIndex.bind(this);
		
		this.state = this._initState(props);
	}

	componentWillReceiveProps(nextProps){
		this.setState(this._initState(nextProps));
	}

	_initState(props){
		var numImages = Util.objLength(props.sessionImages);
		var order = Util.getUniqueRandomNumbers(numImages, 0, numImages-1);
		return {
			sessionImages: props.sessionImages,
			currentImageNum: 0,
			order: order
		}
	}

	done(){
		throw 'implement me in subclass';
	}

	render(){
		throw 'implement me in subclass';
	}



	next(){
		if(this.hasNext()){
			console.log('ImageSessionSet next:', this.getNextNum());
			this.setState({ currentImageNum: this.getNextNum() });
		}else{
			console.log('ImageSessionSet done');
			this.done();
		}
	}

	hasNext(){
		var nextNum = this.getNextNum();
		var numImages = Util.objLength(this.state.sessionImages);
		return nextNum < numImages;
	}

	getNextNum(){
		return this.state.currentImageNum + 1;
	}

	getCurrentSessionImage(){
		return this.state.sessionImages[this.getCurrentImageIndex()];
	}

	getCurrentImageIndex(){
		return this.state.order[this.state.currentImageNum]; 
	}

}