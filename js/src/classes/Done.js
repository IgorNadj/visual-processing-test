

class Done extends React.Component {
	
	render(){
		var inner = null;
		if(this.props.resultsKey){
			var resultsUrl = 'results?key='+this.props.resultsKey;
			inner = <div>
				<a href={ resultsUrl }>View Results</a>.
			</div>
		}else{
			inner = <div>
				<p>Thanks!</p>
			</div>
		}

		return <div style={{ padding: '3em' }}>
			<h2>Done</h2>
			{ inner }
		</div>
	}

}