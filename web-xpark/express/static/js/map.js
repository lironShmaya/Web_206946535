function initMap() {
    // Map Options
    let options = {
      zoom: 13,
      center: {lat: 32.0853, lng: 34.7818}
    }
    // New Map
    let map = new google.maps.Map(document.getElementById('map'), options);

 navigator.geolocation.getCurrentPosition(function(position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    let image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    map.setCenter(pos);
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: "Your Location!",
      icon: image
    });
});

  
    addMarker({coords: {lat: 32.0761473, lng: 34.7671822},
      content:'<h1>Gan London Parking Lot </h1> <p> Frishman 52, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button> ' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    },1);
    addMarker({coords: {lat: 32.0763204, lng: 34.7650351},
      content:'<h1>Central Park Parking Lot</h1> <p>Hayarkon 78, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 32.0766572, lng: 34.7643466},
      content:'<h1>Eidelson Parking Lot</h1> <p> Lanski 52, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 32.0748159, lng: 34.772537},
      content:'<h1>Kanarit Parking Lot</h1> <p>Menahem Begin 104, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 34.7626592, lng: 34.7626592},
      content:'<h1>Parking Cheap</h1> <p>Pinsker 52, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 32.0714273, lng: 34.7785579},
      content:'<h1>Pinsker Parking Lot</h1> <p>Pinsker 1, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 32.0683634, lng: 34.7807037},
      content:'<h1>Beit Lessin Parking</h1> <p>Yosef Lurya St 8, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 32.0628536, lng: 34.7720348},
      content:'<h1>Shuk Bezalel Parking Lot</h1> <p>Hamacabi 2, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 32.068097, lng: 34.7675637},
      content:'<h1>Shuk Hacarmel Parking Lot</h1> <p>Hacarmel 62, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 32.0522312, lng: 34.7585128},
      content:'<h1>The Police Parking Lot</h1><p>Ametz 12, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 32.0522312, lng: 34.7585128},
      content:'<h1>Amazonas Parking Lot</h1> <p>Hatekuma 24s, Tel Aviv</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat:31.246817858421885, lng: 34.79635253454367},
      content:'<h1>Harishonim Parking</h1> <p>Weizman 24 st, Beer Sheva</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 31.246460700132282, lng: 34.79631155226352},
      content:'<h1>Weiztman Parking</h1> <p>Weizman 42 st, Beer Sheva</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 31.249882000393534, lng:34.799133235816925},
      content:'<h1>Municipality Parking</h1> <p>Weizman 42 st, Beer Shevav</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 31.24490135326091, lng:34.79227751037728},
      content:'<h1>Eli Cohen Parking</h1> <p>Shahal 123 st, Beer Shevav</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 31.24301175725426, lng:34.79944437202623},
      content:'<h1>Railway Parking</h1> <p>Hamacbi 233 st, Beer Shevav</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });
    addMarker({coords: {lat: 31.24758891741585, lng:34.7999593563015},
      content:'<h1>Szold Parking</h1> <p>Sderot Shazar 42 st, Beer Shevav</p> <button onclick="saveSpot()" class="SaveB">Save Spot</button>' +
        '<button onclick="cancelSpot()" class="cancelB">Cancel Saved Spot</button>',
    });



    //Add Marker Function
    function addMarker(props, capacity) {
        let marker = new google.maps.Marker({position: props.coords,map});

      // Check Content
      if (props.content) {
        let infoWindow = new google.maps.InfoWindow({
          content: props.content

        });
        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });
      }
    }
  }
      let cars = 0;
      let capacity = 1000;
      function saveSpot() {
          if (cars < capacity) {
          cars++
          alert("Spot Saved Successfully")
        } else {
          alert("Parking lot is full")
        }
  }

      function cancelSpot() {
        if(cars != 0) {
          cars--
          alert("Canceled saved spot successfully")
        }
        else {
          alert("No saved spots were found")
        }
      }
      
let currentPage = window.location.pathname;
console.log(currentPage);

const activePage = document.querySelectorAll("nav a").forEach(
  link =>{
    if (link.href.includes(`${currentPage}`)) {
    link.classList.add("active");
}
}
);
console.log(activePage);
