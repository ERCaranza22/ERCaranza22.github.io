document.querySelectorAll('.hrs_trailblazer img').forEach(image =>{
		image.onclick = () =>{
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src');
		}
});

		document.querySelector('.popup-image span').onclick = () =>{
		document.querySelector('.popup-image').style.display = 'none';
		}
		
document.querySelectorAll('.hrs_character img').forEach(image =>{
		image.onclick = () =>{
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src');
		}
});

		document.querySelector('.popup-image span').onclick = () =>{
		document.querySelector('.popup-image').style.display = 'none';
		}