console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const rubberBuck = document.getElementById('image');

rubberBuck.addEventListener('mouseover', () => {
alert('You are as cute as a rubber duck!')
})