(function() {
  'use strict';

  function BarbeariaCtrl($scope) {
    var vm;

    vm = this;

    // ====

    initMap();

    // ====

    function initMap() {
      var map, lat_lng, marker, styledMap, infowindow, description;

      lat_lng = new google.maps.LatLng(-8.1901287,-34.9237563);

      map = new google.maps.Map(document.getElementById('map-container'), {
        center: lat_lng,
        zoom: 17,
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
        zoomControl: false,
        scrollwheel: false,
        draggable: true
      });

      marker = new google.maps.Marker({
        position: lat_lng,
        map: map,
        icon: './img/marker.png',
        animation: google.maps.Animation.DROP
      });

      description = '<h4>Estamos aqui!</h4>' +
                    '<p>Av. Ayrton Senna da Silva, n° 4200 - Piedade (curva do S)</p>';

      infowindow = new google.maps.InfoWindow({
        content: description,
        maxWidth: 120
      });

      infowindow.open(map, marker);

      styledMap = applyStyles();

      map.mapTypes.set('barber_081', styledMap);
      map.setMapTypeId('barber_081');
    }

    function applyStyles() {
      var style_array;

      style_array = [
        {
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#242f3e"
          }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#746855"
          }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
          {
            "color": "#242f3e"
          }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#d59563"
          }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#d59563"
          }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#263c3f"
          }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#6b9a76"
          }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#38414e"
          }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
          {
            "color": "#212a37"
          }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#9ca5b3"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#746855"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
          {
            "color": "#1f2835"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#f3d19c"
          }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#2f3948"
          }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#d59563"
          }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
          {
            "color": "#17263c"
          }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#515c6d"
          }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
          {
            "color": "#17263c"
          }
          ]
        }
      ];

      return new google.maps.StyledMapType(style_array, {
        name: 'Barber 081'
      });
    }
  }

  BarbeariaCtrl.$inject = [
    '$scope'
  ];

  angular
  .module('Barber.barbearia')
  .controller('BarbeariaCtrl', BarbeariaCtrl);
})();
