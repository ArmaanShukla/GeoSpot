let map;
let userMarker;

function initMap() {
    const defaultLocation = { lat: 10.8505, lng: 76.2711 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 7
    });
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(userLocation);
                map.setZoom(15);

                if (userMarker) {
                    userMarker.setMap(null);
                }

                userMarker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "You are here"
                });
            },
            function() {
                alert("Location access denied. Please allow location permission.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
