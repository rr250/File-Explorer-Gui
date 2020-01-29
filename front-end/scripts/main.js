function operate(operator) {
	resultLambda = operator();
	resultLambda(result => {
		console.log(result)
		resultList="";
		for(var i=0;i<result.length;i++){
			resultList+="<li><p>"+result[i]+"</p></li>";
		}
		document.querySelector('#output').innerHTML = resultList;
	});
}
