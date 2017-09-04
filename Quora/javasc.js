function myMap() {
    var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

}
 function trending(){
 	document.getElementById("Trending").style.display="block";
 	document.getElementById("map").style.display="none";
 }
 function Region(){
 	document.getElementById("map").style.display="block";
 	document.getElementById("Trending").style.display="none";
 	document.getElementById("Saved").style.display="none";
 }
 function Favourites() {
 	document.getElementById("Trending").style.display="none";
 	document.getElementById("map").style.display="none";
	 document.getElementById("Favourites").style.display="block";
 		
 }
 function Saved() {
 	document.getElementById("Trending").style.display="none";
 	document.getElementById("map").style.display="none";
	document.getElementById("Favourites").style.display="none";
 	document.getElementById("Saved").style.display="block";	
 }
 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}