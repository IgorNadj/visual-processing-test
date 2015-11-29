

/**
  * An ImageSessionSet is a common base class for dealing with sessionImages
  */
class ImageSessionSet extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {};

		this.done = this.done.bind(this);
		this.next = this.next.bind(this);
		this.hasNext = this.hasNext.bind(this);
		this.getNextNum = this.getNextNum.bind(this);
		this.getCurrentSessionImage = this.getCurrentSessionImage.bind(this);
		this.getCurrentImageIndex = this.getCurrentImageIndex.bind(this);
		this.getNumStateImages = this.getNumStateImages.bind(this);

		// TODO: DRY with update method.
		this.state.sessionImages = props.sessionImages;
		this.state.currentImageNum = 0;
		var order = Util.getUniqueRandomNumbers(this.getNumStateImages(), 0, this.getNumStateImages()-1);
		this.state.order = order;
	}

	componentWillReceiveProps(nextProps){
		this.setState({ sessionImages: props.sessionImages });
		this.setState({ currentImageNum: 0 });
		var order = Util.getUniqueRandomNumbers(this.getNumStateImages(), 0, this.getNumStateImages()-1);
		this.setState({ order: order });
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
		var numImages = this.getNumStateImages();
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

	getNumStateImages(){
		return Util.objLength(this.state.sessionImages)
	}

}