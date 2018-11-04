

class Instructions extends React.Component {

	constructor(props){
		super(props);

		this.start = this.start.bind(this);
	}

	componentDidMount(){
		key('space', this.start);
	}
	componentWillUnmount(){
		key.unbind('space');
	}

	start(){
		if(this.props.loadingPercent != 1) return; // in case of keypress, dont start until loaded
		this.props.start();
	}
	

	render(){
		console.log('instructions', this.props);

		var progressContent = <div>
			Session {this.props.sessionNum} / {this.props.numSessions}
		</div>

		var content = null;
		var startButtonLabel = 'Start (spacebar)';
		if(this.props.myState == 'first-instructions'){
			// first instruction, special
			startButtonLabel = 'Continue';

			var resultsContent = null;
			if(this.props.earlyAccess){
				resultsContent = <div>
					<h2>Early Access: Data Gathering</h2>
					<p>Due to the nature of the study (comparing your performance to the average performance), at least 30 data points are needed before analysis can be done. Therefore, this tool cannot give you your results immediately, but instead you will be asked to provide (optionally) an email address at the end, and I will email you your results.</p> 
				</div>
			}else{
				resultsContent = <div>
					<h3>Results</h3>
					<p>Once you have completed this test, you will see your individual results. Otherwise, the <a href="results">results page</a> lists overall results and conclusions.</p>
				</div>
			}

			content = <div>
				<h1>Visual Processing Test</h1>

				<hr/>
				<p><strong>Note: this test is closed</strong></p>
				<p>The test is left up for posterity, but you will not be able to submit your results. Session size is reduced to 1 session of 5 photos which should take about a minute.</p>
				<hr/>

				<h2>Introduction</h2>
				<p>This test is aimed at testing your top-down visual processing ability, and should take around 10 minutes to complete.</p>
				
				<h2>What to expect</h2>
				<p>There are {this.props.numSessions} sessions, and each session is broken up into three parts.</p>
				
				<h3>Part 1. Before</h3>
				<p>A black and white image will flash in front of your eyes, very briefly, and you will then be asked if you saw a person or not. 
				Don't worry if you find it difficuilt to answer, it's supposed to be. Then you will see the next image and be asked again, this will repeat {this.props.sessionSize} times.</p>
				<img src="res/images/example-test.png" />
				
				<h3>Part 2. Priming</h3>
				<p>The original images will be shown to you for 2 seconds each.</p>
				<img src="res/images/example-template.png" />
				
				<h3>Part 3. After</h3>
				<p>You will then again be shown the black and white images and asked the same question.</p>
				<img src="res/images/example-test.png" />
			
				<h2>Background</h2>
				<p>This test is a <em>limited</em> reproduction of <a href="http://www.pnas.org/content/112/43/13401.abstract" target="_blank">a recent study</a> testing a hypothesis on the nature of hallucinations.</p>  
				<p>Very briefly, it attempts to explain hallucinations and related symptoms as a normal brain function (top-down visual processing) which is a little out of tune.</p> 
				<p>Steven Novella of The Skeptics Guide to the Universe has a <a href="http://theness.com/neurologicablog/index.php/the-nature-of-hallucinations/" target="_blank">much better write up</a>, and was the inspiration for this project.</p>

				<h3>Limitations</h3>
				<ul>
					<li>The original study had 160 template images, which allowed for 16 sessions. This study only has 40 template images, allowing for 4 sessions. This means that resulting data will be much less accurate, and should not be taken seriously.</li>
					<li>The original study had a warmup session, this test has none (apart from the above instructions).</li>
					<li>The original study had a human supervisor, this test is done online without help.</li>
					<li>I am not a scientist, and may have made mistakes in understanding the experimental method or the analysis.</li>
				</ul>

				<h3>Project Links</h3>
				<p>The source code is available here: <a href="https://github.com/IgorNadj/visual-processing-test" target="_blank">Project on github</a></p>

				{ resultsContent }
				
			</div>
		}
		if(this.props.myState == 'beforeBlock-instructions'){
			content = <div>
				{ progressContent }
				<h2>Part 1. Before</h2>
				<p>
					A black and white image will be shown very briefly, and you will be asked to answer whether you saw a person or not.
				</p>
			</div>
		}
		if(this.props.myState == 'prime-instructions'){
			content = <div>
				{ progressContent }
				<h2>Part 2. Priming</h2>
				<p>The colour images will be displayed for two seconds each.</p>
			</div>
		}
		if(this.props.myState == 'afterBlock-instructions'){
			content = <div>
				{ progressContent }
				<h2>Part 3. After</h2>
				<p>
					A black and white image will be shown very briefly, and you will be asked to answer whether you saw a person or not.
				</p>
			</div>
		}

		var hasStart = this.props.loadingPercent == 1;
		var start = '';
		var loadingProgress = '';
		if(hasStart){
			start = <a href="#" onClick={this.start} style={{ padding: '0.5em 1em', border: '1px solid #aaa', textDecoration: 'none' }}>{ startButtonLabel }</a>
		}else{
			var percentRounded = Math.round(this.props.loadingPercent * 100);
			loadingProgress = <span>Loading... { percentRounded }%</span>
		}

		var style = { width: '700px', height: '500px', padding: '50px', overflow: 'scroll' };
		return <div style={style}>
			<div>
				{ content }
			</div>
			<p style={{ padding: '2em', textAlign: 'center' }}>
				{ loadingProgress }
				{ start }
			</p>
		</div> 
	}
}