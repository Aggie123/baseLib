let ulItem = document.getElementsByTagName('ul')[0]
ulItem.onclick = (e) =>{
	if(e.target.TagName = 'A'){
		e.preventDefault();
		console.log(e.target.getAttribute('href'))
	}
}