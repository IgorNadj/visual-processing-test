
var res = new Resources(window.VPT_IMAGES);
var db = new Firebase('https://amber-torch-480.firebaseio.com/');

ReactDOM.render(
	<VisualProcessingTest res={res} db={db} />,
    document.getElementById('app')
);
