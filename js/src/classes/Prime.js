

class Prime extends ImageSessionSet {
	
	constructor(props){
		super(props);

		this.getCurrentImageSrc = this.getCurrentImageSrc.bind(this);
		this.start = this.start.bind(this);

		setTimeout(this.start, 0);
	}

	start(){
		var self = this;
		var showNextSlide = function(){
			if(!self.hasNext()){
				console.log('showNextSlide, no next, returning');
				self.done();
				return;
			}
			self.next();
			setTimeout(showNextSlide, 2000);
		}
		setTimeout(showNextSlide, 2000);
	}

	done(){
		console.log('prime done yo');
		this.props.done();
	}

	getCurrentImageSrc(){
		var sessionImage = this.getCurrentSessionImage();
		return sessionImage.imageSet.template;
	}

	render(){
		var style = { width: '800px', height: '600px', display: 'block' };
		return <img style={style} src={this.getCurrentImageSrc()} />
	}

}