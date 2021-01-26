
        // let map;
  
        // function initMap() {
        //   map = new google.maps.Map(document.querySelector(".contact-map"), {
        //     center: { lat: -34.397, lng: 150.644 },
        //     zoom: 8,
        //   });
        // }
       

//    Adding a Google Map with a Marker to Your Website 
    
    // Initialize and add the map
    // function initMap() {
    //     // The location of Uluru
    //     const uluru = { lat: -25.344, lng: 131.036 };
    //     // The map, centered at Uluru
    //     const map = new google.maps.Map(document.querySelector(".contact-map"), {
    //     zoom: 4,
    //     center: uluru,
    //     });
    //     // The marker, positioned at Uluru
    //     const marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    //     });
    // }


    function initMap() {
        var dumbo = {lat: 27.671153, lng:85.357631};
        var mapOptions = {
            center: dumbo,
            zoom: 10
        };
        var googlemap = new google.maps.Map(document.querySelector('.contact-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: dumbo,
            map: googlemap
        });
    }
window.addEventListener('scroll', function(e){
    // console.log(window.scrollY);
    if(window.scrollY > 100){
        document.querySelector('#navbar').style.opacity = 0.8;
    } else{
        document.querySelector('#navbar').style.opacity = 1;
    }
})
// Smooth Scrolling
$('#navbar a, .btn').on('click', function(e){
    if(this.hash !==''){        
        e.preventDefault();
        const hash = this.hash;
        // console.log(hash);
        console.log($(hash).offset()); //{top : , left : }
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
         );
    }
})
    