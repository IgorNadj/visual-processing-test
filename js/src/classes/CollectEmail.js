

class CollectEmail extends React.Component {
	
	constructor(props){
		super(props);

		this.setEmailAddress = this.setEmailAddress.bind(this);
		this.submitEmail = this.submitEmail.bind(this);
	}

	setEmailAddress(e){
		this.emailAddress = e.target.value;
		console.log('set email address: ', this.emailAddress);
	}

	submitEmail(){
		console.log('submitEmail', this.emailAddress);
		this.props.submit(this.emailAddress);
	}

	render(){
		return <div style={{ padding: '3em' }}>
			<h2>Done</h2>
			<p>Thanks!</p>

			<div>
				<h3>Early Access: Data Gathering</h3>
				<p>Due to the nature of the study (comparing your performance to the average performance), at least 30 data points are needed before analysis can be done. Therefore, this tool cannot give you your results immediatelly, but instead you will be asked to provide (optionally) an email address at the end, and I will email you your results.</p> 
			</div>

			<div>
				<label>Email Address</label>
				<input type="text" onChange={this.setEmailAddress} placeholder="(optional)" />
			</div>
			<div>
				<input type="submit" onClick={this.submitEmail} />
			</div>
		</div>
	}

}