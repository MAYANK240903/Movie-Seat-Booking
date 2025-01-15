//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
function addMovie(movie , index){
    const newMovie = document.createElement('option');
    newMovie.text=movie.movieName+' $'+movie.price;
    newMovie.value=index;
    const selectMovie = document.querySelector('#selectMovie');
    selectMovie.appendChild(newMovie);
}
moviesList.forEach((movie , index)=>addMovie(movie , index));
    const selectMovie=document.querySelector('#selectMovie');
    selectMovie.addEventListener('change' , ()=>{
        var option = selectMovie.options[selectMovie.selectedIndex].value;
        var moviename = document.getElementById('movieName');
        moviename.textContent=moviesList[option].movieName;
        var movieprice = document.getElementById('moviePrice');
        movieprice.textContent='$ '+moviesList[option].price; 
    	var seats = document.getElementById('numberOfSeat');
        var numberseat = seats.textContent;
        var price = document.getElementById('totalPrice');
        console.log(numberseat*moviesList[option].price);
        price.textContent = '$ '+ numberseat*moviesList[index].price;
	});
//Add eventLister to each unoccupied seat
	function addseat(seat , index){
        seat.addEventListener('click' , ()=>{
            if (seat.classList.contains('occupied')){
                
            }
            else if (seat.classList.contains('selected')){
                seat.classList.remove('selected');
                var seats = document.getElementById('numberOfSeat');
                var numberseat = seats.textContent;
                numberseat--;
                seats.textContent=numberseat;
        		var price = document.getElementById('totalPrice');
                const selectMovie=document.querySelector('#selectMovie');
                var option =selectMovie.options[selectMovie.selectedIndex].value;
                price.textContent = '$ '+ numberseat*moviesList[option].price;
                const counting = document.querySelector('#selectedSeatsHolder');
                var className = "class" + index;
                const remove = counting.querySelector('.'+className);
                remove.parentNode.removeChild(remove);
                //console.log('hiiii');
                if (counting.children.length == 0){
                    //console.log('hiiii');
                    const remover = document.createElement('span');
                    remover.className='noSelected';
                    remover.textContent='No Seat Selected';
                    counting.appendChild(remover);
                }
                //
            }
        	else{
                const remove = document.querySelector('.noSelected');
                if (remove){
                    remove.parentNode.removeChild(remove);
                }
   				seat.classList.add('selected');
                //console.log('heelo');
                var seats = document.getElementById('numberOfSeat');
                var numberseat = seats.textContent;
                numberseat++;
                seats.textContent=numberseat;
        		var price = document.getElementById('totalPrice');
                const selectMovie=document.querySelector('#selectMovie');
                var option =selectMovie.options[selectMovie.selectedIndex].value;
                price.textContent = '$ '+ numberseat*moviesList[option].price;
                const counting = document.querySelector('#selectedSeatsHolder');
                const newBox= document.createElement('div');
                newBox.textContent=index;
                newBox.className='selectedSeat';
                var className = "class" + index;
                newBox.classList.add(className);
                counting.appendChild(newBox);
			} 
        });
    }
	const allseat = document.querySelectorAll('.seat');
	allseat.forEach((seat , index)=>addseat(seat , index) );	
	
//Add eventLsiter to continue Button

	const continuebtn = document.querySelector('#proceedBtn');
	continuebtn.addEventListener('click' , ()=>{
       const numberseats = document.querySelector('#numberOfSeat');
        var seats = numberseats.textContent;
		if (seats==0){ 
        	alert('Oops no seat Selected');
        }
        else{
            function occupy(seat){
                seat.classList.remove('selected');
                seat.classList.add('occupied');
                const parentNode = document.querySelector('#selectedSeatsHolder');
                while (parentNode.firstChild) {
    			parentNode.removeChild(parentNode.firstChild);
                }
                const remover = document.createElement('span');
                remover.className='noSelected';
                remover.textContent='No Seat Selected';
                parentNode.appendChild(remover);
                const numberseats = document.querySelector('#numberOfSeat');
                numberseats.textContent='0';
                var price = document.getElementById('totalPrice');
                price.textContent='$ '+0;
        }
            alert('Yayy! Your Seats have been booked');
            const allselected = document.querySelectorAll('.selected');
            allselected.forEach((seat)=>occupy(seat));
        }
    });
        
//Add eventListerner to Cancel Button fgf

const cancelbtn = document.querySelector('#cancelBtn');

cancelbtn.addEventListener('click' , ()=>{
    function notoccupy(seat){
                seat.classList.remove('selected');
                const parentNode = document.querySelector('#selectedSeatsHolder');
                while (parentNode.firstChild) {
    			parentNode.removeChild(parentNode.firstChild);
                }
                const remover = document.createElement('span');
                remover.className='noSelected';
                remover.textContent='No Seat Selected';
                parentNode.appendChild(remover);
                const numberseats = document.querySelector('#numberOfSeat');
                numberseats.textContent='0';
                var price = document.getElementById('totalPrice');
                price.textContent='$ '+0;
        }
    const allselected = document.querySelectorAll('.selected');
    allselected.forEach((seat)=>notoccupy(seat));
});