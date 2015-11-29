

class Test extends ImageSessionSet {

	constructor(props){
		super(props);
		this.answers = {};

		this.answer = this.answer.bind(this);
		this.getCurrentImageSrc = this.getCurrentImageSrc.bind(this);
	}

	answer(answeredYes){
		console.log('answer', answeredYes);
		var sessionImage = this.getCurrentSessionImage();		
		this.answers[sessionImage.imageSet.id] = answeredYes;
		this.next();
	}

	done(){
		this.props.done(this.answers);
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