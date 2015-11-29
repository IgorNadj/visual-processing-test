

class Test extends ImageSessionSet {

	constructor(props){
		super(props);
		this.answers = {};
		this.timings = {};

		this.answer = this.answer.bind(this);
		this.getCurrentImageSrc = this.getCurrentImageSrc.bind(this);
	}

	answer(answeredYes, timings){
		console.log('answer', answeredYes, timings);
		var sessionImage = this.getCurrentSessionImage();		
		this.answers[sessionImage.imageSet.id] = answeredYes;
		this.timings[sessionImage.imageSet.id] = timings;
		this.next();
	}

	done(){
		this.props.done(this.answers, this.timings);
	}

	getCurrentImageSrc(){
		var sessionImage = this.getCurrentSessionImage();
		if(sessionImage.showControl){
			return sessionImage.imageSet.control;
		}else{
			return sessionImage.imageSet.test;
		}
	}

	render(){
		return <TestPhoto imageSrc={this.getCurrentImageSrc()} done={this.answer} /> 
	}

}