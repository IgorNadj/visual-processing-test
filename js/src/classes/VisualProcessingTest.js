

class VisualProcessingTest extends React.Component {

	constructor(props){
	    super(props);
	    this.state = { 
	    	myState: 'loading', 
	    	res: props.res, 
	    	sessions: [],
	    	currentSessionIndex: 0,
	    	sessionSize: 3,
	    	numSessions: 4
	    };

	    var reactMethods = ['_init', '_markSessionAnswers', 'getCurrentSessionImages', 'nextSession', 'loadingDone', 'beforeBlockStart', 'beforeBlockDone', 'primeStart', 'primeDone', 'afterBlockStart', 'afterBlockDone'];
	    for(var i in reactMethods){
	    	var m = reactMethods[i];
	    	this[m] = this[m].bind(this);
	    }

	    setTimeout(this._init, 0);
	}

	_init(){
		console.log('res: ', this.state.res);

		// split image sets into 4 sessions, randomly distributed
		var sessions = [];
		var imageSets = this.state.res.getItems();
		var imageSetsArr = [];
		for(var key in imageSets){
			if(imageSets.hasOwnProperty(key)){
				var o = imageSets[key];
				o.id = key;
				imageSetsArr.push(o);
			}
		}
		console.log('imageSetsArr', imageSetsArr);
		var imageSetsNeeded = this.state.numSessions * this.state.sessionSize;
		var order = Util.getUniqueRandomNumbers(imageSetsNeeded, 0, imageSetsNeeded-1);
		var c = 0;
		for(var i = 0; i < this.state.numSessions; i++){
			var session = [];
			for(var j = 0; j < this.state.sessionSize; j++){
				var o = {
					imageSet: imageSetsArr[order[c]],
					showControl: Math.random() > 0.5, // 50% chance of getting a control, 50% of a test image
					beforeTestAnswer: null,
					afterTestAnswer: null
				}
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

	_markSessionAnswers(whichTest, answers){
		var answerKey;
		if(whichTest == 'before'){
			answerKey = 'beforeTestAnswer';
		}else{
			answerKey = 'afterTestAnswer';
		}
		var sessions = this.state.sessions;
		var session = sessions[this.state.currentSessionIndex];
		for(var i in session){
			var sessionImage = session[i];
			sessions[this.state.currentSessionIndex][i][answerKey] = answers[sessionImage.imageSet.id];
		}
		console.log('sessions updated:', sessions);
		this.setState({ sessions: sessions });
	}

	getCurrentSessionImages(){
		return this.state.sessions[this.state.currentSessionIndex];
	}

	nextSession(){
		var nextSessionIndex = this.state.currentSessionIndex + 1;
		if(nextSessionIndex >= this.state.numSessions){
			this.allSessionsDone();
		}else{
			this.setState({ currentSessionIndex: nextSessionIndex });
			this.setState({ myState: 'beforeBlock-instructions' });
		}

	}
	

	loadingDone(){
		this.setState({ myState: 'beforeBlock-instructions' });
	}
	beforeBlockStart(){
		this.setState({ myState: 'beforeBlock' });
	}
	beforeBlockDone(answers){
		this._markSessionAnswers('before', answers);
		this.setState({ myState: 'prime-instructions' });
	}
	primeStart(){
		this.setState({ myState: 'prime' });
	}
	primeDone(){
		this.setState({ myState: 'afterBlock-instructions' });
	}
	afterBlockStart(){
		this.setState({ myState: 'afterBlock' });
	}
	afterBlockDone(answers){
		this._markSessionAnswers('after', answers);
		this.nextSession();
	}
	allSessionsDone(){
		this.setState({ myState: 'allSessionsDone' });
	}

    render(){
    	var s = this.state.myState;

    	var inner = null;
    	if(s == 'loading'){
    		inner = <Loading />;
    	}
    	if(s == 'beforeBlock-instructions' || s == 'prime-instructions' || s == 'afterBlock-instructions'){
    		var onStart;
    		if(s == 'beforeBlock-instructions') onStart = this.beforeBlockStart;
			if(s == 'prime-instructions')       onStart = this.primeStart;
    		if(s == 'afterBlock-instructions')  onStart = this.afterBlockStart;
    		inner = <Instructions myState={s} start={onStart} />
    	}
    	if(s == 'allSessionsDone'){
    		inner = <Done />
    	}
    	if(s == 'beforeBlock' || s == 'afterBlock'){
    		var onDone;
    		if(s == 'beforeBlock') onDone = this.beforeBlockDone;
    		if(s == 'afterBlock')  onDone = this.afterBlockDone;
    		inner = <Test sessionImages={this.getCurrentSessionImages()} done={onDone} />
    	}
    	if(s == 'prime'){
    		return <Prime sessionImages={this.getCurrentSessionImages()} done={this.primeDone} />
    	}
        return <div style={{ width: '800px', height: '600px', background: 'white' }}>
        	{inner}
        </div>
    }
};