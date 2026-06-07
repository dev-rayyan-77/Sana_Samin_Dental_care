function toggle() {
    const ele = document.getElementById('minus-icon');
    const hideSection = document.getElementById('hide-section');
    console.log( hideSection)
	if ( hideSection.style.display === "none" ) {
		hideSection.style.display = "block";
	} else {
		hideSection.style.display = "none";
	}
}
