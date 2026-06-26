let map;
let userMarker;
let userLocation;
let placeMarkers = [];

const demoPlaces = {
    restaurant: [
        { name: "Demo Restaurant", offsetLat: 0.003, offsetLng: 0.002 },
        { name: "Food Corner", offsetLat: -0.002, offsetLng: 0.003 }
    ],
    cafe: [
        { name: "Coffee Spot", offsetLat: 0.002, offsetLng: -0.002 },
        { name: "Cafe Point", offsetLat: -0.003, offsetLng: -0.002 }
    ],
    hospital: [
        { name: "City Hospital", offsetLat: 0.004, offsetLng: 0.001 },
        { name: "Health Care Centre", offsetLat: -0.004, offsetLng: 0.001 }
    ],
    atm: [
        { name: "Bank ATM", offsetLat: 0.001, offsetLng: 0.004 },
        { name: "Cash Point ATM", offsetLat: -0.001, offsetLng: -0.004 }
    ],
    park: [
        { name: "Green Park", offsetLat: 0.005, offsetLng: -0.001 },
        { name: "City Garden", offsetLat: -0.005, offsetLng: 0.002 }
    ]
};

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
                userLocation = {
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

                alert("Location detected successfully!");
            },
            function() {
                alert("Location access denied. Please allow location permission.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function searchNearbyPlaces(placeType) {
    if (!userLocation) {
        alert("Please click 'Find My Location' first.");
        return;
    }

    clearPlaceMarkers();

    demoPlaces[placeType].forEach(function(place) {
        const position = {
            lat: userLocation.lat + place.offsetLat,
            lng: userLocation.lng + place.offsetLng
        };

        const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: place.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<strong>${place.name}</strong><br>Nearby ${placeType} location`
        });

        marker.addListener("click", function() {
            infoWindow.open(map, marker);
        });

        placeMarkers.push(marker);
    });
}

function clearPlaceMarkers() {
    placeMarkers.forEach(function(marker) {
        marker.setMap(null);
    });
    placeMarkers = [];
}
