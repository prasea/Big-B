
        // let map;
  
        // function initMap() {
        //   map = new google.maps.Map(document.querySelector(".contact-map"), {
        //     center: { lat: -34.397, lng: 150.644 },
        //     zoom: 8,
        //   });
        // }
       

//    Adding a Google Map with a Marker to Your Website 
    
    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.querySelector(".contact-map"), {
        zoom: 4,
        center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        });
    }
// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !==''){
        event.preventDefault();

        const hash = this.hash;
        console.log(hash);
         $('html, body').animate(
             {
                 scrollTop: $(hash).offset().top - 100
             },
             800
         );
    }
})
    