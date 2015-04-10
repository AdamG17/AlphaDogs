//This is a custom JS File
var map;
var sanfrancisco = new google.maps.LatLng(37.7724991, -122.4427361);
var MY_MAPTYPE_ID = 'custom_style';



function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#008787' },
        { visibility: 'simplified' },
        { gamma: 0.75 },
        { weight: 1 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },

    {
      featureType: 'water',
      stylers: [
        { color: '#93b6b6' },
        // { lightness: 30}
      ]
    },

    {
    featureType: 'road', 
    elementType: 'labels.text',
    stylers: [
      { color: '#008787' },
      { visibility: 'simplified' }
    ]
  },

  {
    featureType: 'road', 
    elementType: 'geometry.fill',
    stylers: [
      { color: '#a5c2c2' },
      { visibility: 'simplified' },
      { lightness: 20 }
    ]
  },

  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'off' }
    ]
  },

  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#a5c2c2' }
    ]
  },

  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#a5c2c2' },
      { lightness: 20 }
    ]
  },

  {
    featureType: 'road.highway.controlled_access',
    elementType: 'labels',
    stylers: [
      { visibility: 'off'}
    ]

  },

  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      { color: '#93b6b6' },
      { visibility: 'on' },
      { lightness: 80 }
    ]
  },


  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text',
    stylers: [
      { color: '#008787' },
      { visibility: 'on' }
    ]
  },

  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.stroke',
    stylers: [
      { visibility: 'off' },
    ]
  },

  {
    featureType: 'poi.school',
    elementType: 'all',
    stylers: [
      { visibility: 'off' }
    ]
  }

  ];

var mapOptions = {
  center: sanfrancisco,
  disableDefaultUI: true,
    // zoom: 12,
  minZoom:12,
  maxZoom: 20,
    
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

var styledMapOptions = {
    name: 'Custom Style'
  };

var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

var locations = [
  [37.776282, -122.434668, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Alamo Square Dog Park</h1>'+
      '<p><i>Scott & Fulton • Partial Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Another park with spectacular views, a playground and athletic courts. The park is great for dogs to explore, but without a dog-specific area. Most dogs are there in the morning and afternoons and can walk alone with their owners or socializing with others. This park is popular with the weekend crowd and is usually full by 10 am on Saturdays and Sundays.</p>'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-alamosquare-02.jpg" width="60" height="60" alt="Alamo Square" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],

      [37.791358, -122.437576, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Alta Plaza Dog Park</h1>'+
      '<p><i>Jackson & Steiner • Partial Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Huge recreation area at the top of the city. This park boasts some of the best views in the city along with one of the best places to bring your pup. With no designated dog area, dog owners have found their home on the north end of the park next to Jackson street. Dogs are almost always socializing here and dog owners as well.</p>'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-altaplaza-03.jpg" width="60" height="60" alt="Alta Plaza" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],

  [37.768436, -122.441722, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Buena Vista Park</h1>'+
      '<p><i>Buena Vista & Haight • Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Located in the famous Haight/Ashbury neighborhood, this park boasts a huge network of trails and a few areas specifically for dogs. Great for a long walk, not so much for running or fetching, the park runs through a thicket of trees. The seclusion of the park lends to vagrants and there are often squatters living in the park and spreading litter. There is a playground and some athletic courts.</p>'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-buenavista-03.jpg" width="60" height="60" alt="Buena Vista" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],
  [37.803848, -122.455683, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Crissy Field</h1>'+
      '<p><i>1199 East Beach • Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Expansive grass field and beach with lovely views of the Golden Gate. Crissy Field and beach cater to dogs of all interests. Play, running, fetching and swimming are open to dogs, who currently are allowed off leash. This area is incredibly popular, almost always occupied and really popular during good weather.</p>'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-crissybeach-02.jpg" width="60" height="60" alt="Crissy Beach" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],
[37.7468265,-122.4392784, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Douglass Dog Park</h1>'+
      '<p><i>Douglass & 27th Street • Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>A park built just for dogs. The huge grass area is popular every day of the week with dogs of all shapes and sizes enjoying the vast play area. There are poop and toy bins, doggy water fountains and hills for more adventurous breeds to climb. There are nearby basketball courts and a playground for dog owners with families. The entire park is fenced in, so your pup can run free.</p>'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-douglasspark-01.jpg" width="60" height="60" alt="Douglass" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],
[37.716301,-122.502535, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Fort Funston National Park</h1>'+
      '<p><i>Great Highway & Skyline Blvd • Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Fort Funston is doggy heaven. The park is located on the coast and amongst the vast trail network, visitors can enjoy sweeping views of the Pacific Ocean. The rough surf and beach are always crowded with dogs, but a jump in the ocean should be for advanced swimmers only. Hiking is along the cliffs, so dress appropriately and bring poop bags!</p>'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-fortfunston-02.jpg" width="60" height="60" alt="Fort Funston" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],
[37.804792,-122.43032, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Fort Mason Great Meadow</h1>'+
      '<p><i>2 Marina Boulevard • Partial Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Fort Mason’s Great Meadow is a great place for the weekday dog walker. The huge grass area is dog friendly and the park police have eased up on leash law enforcement. On the weekends, the grass expanse is home to festivals, drunks and rules. The popularity of this spot on the weekends is the only reason to avoid an otherwise great park for dogs.'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-fortmason-03.jpg" width="60" height="60" alt="Fort Mason" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],
[37.769680, -122.486230, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Golden Gate Park</h1>'+
      '<p><i>Between Lincoln & Fulton Streets • Partial Off Leash</i>'+   
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Golden Gate Park is not only massive, but it’s a tourist attraction. There are more options for leisure here than any other park in San Francisco. Unfortunately there are very few areas designated for dogs. The area dog park is hilly, grassy and quite lovely. It is small and located between two busy roads with a lot of traffic. Golden Gate Park is best used as an on leash walking area that both you and your pup can enjoy the beautiful scenery and multitude of visitors.'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-goldengate-02.jpg" width="60" height="60" alt="Golden Gate Park" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],
[37.791874, -122.427586, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Lafayette Park</h1>'+
      '<p><i>Gough St. & Washington St.• Partial Off Leash</i>'+ 
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Recently renovated, Lafayette Park is attractive to dogs and children and anyone else who loves to enjoy the scenic views of San Francisco. The park has walkways, playgrounds, picnic areas and athletic courts. Bring your dog early for socialization or at the end of the workday for a yappy hour. The dog friendly area of the park is a dirt/grass blend on the side of a hill and is the only truly off leash area.'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-lafayette-03.jpg" width="60" height="60" alt="Lafayette Park" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],
[37.806624,-122.439114, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Marina Green</h1>'+
      '<p><i>Marina Blvd between Scott &amp; Webster Streets • Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Right on the water, Marina Green Park is a huge grass area great for taking dogs to play in the mornings and afternoons. Be wary on the weekends, as this scenic park fills up with tourists, active San Franciscans and organized sports. The size of it is great for pups who need a lot of room to run.'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-marinagreens-01.jpg" width="60" height="60" alt="Marina Green" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>'],
 [37.787282,-122.469722, '<div id="content">'+
      '<div id="parkPopup">'+

      '<div id="firstHeading" class="firstHeading"><h1>Mountain Lake Dog Park</h1>'+
      '<p><i>98 Funston Avenue • Partial Off Leash</i>'+
      '</div>'+ 

      '<div id="bodyContent">'+
      '<p>Mountain Lake Dog Park is a great place to take dogs who like to run and explore. Situated beside Mountain Lake, right off of Lake Street in the Presidio Heights neighborhood, the park is teeming with San Franciscans. The amount of amenities cater to active locals, children and dog owners alike. Unfortunately there is also a homeless presence, trash and drug paraphernalia are ever present. The area for dogs is not much more than a dirt patch with a few logs as obstacles for play.'+

      '<div id="parkThumb">'+
      '<img src="images/parks/parkpic-mountainlake-01.jpg" width="60" height="60" alt="Mountain Lake" class="img-circle">'+
      '</div>'+
      
      '<div id="postRate">'+
      '<a href="#">VIEW ALL POSTS</A>'+
      '</div>'+
      '</div>'+

      '<button type="button" class="add">'+
      '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">'+
      '<a href="#">ADD PARK</a>'+
      '</button>'+ 

      '</div>'+
      '</div>']    
];

var tagURLPrefix = 'images/';

var icons = [
  tagURLPrefix + 'alphadogs-mapicon-red.png',
  tagURLPrefix + 'alphadogs-mapicon-grey.png'
]

var iconsLength = icons.length;

// var content = document.getElementById("infoWindow")

var contentString = 
  '<div class="infoWindow-wrapper">' +
    '<div class="infoWindow">' +
        '<div class="firstHeading">' +
          '<p>' +
          '</p>' +
        '</div>' +  
            '<div class="bodyContent">' +
              '<div class="parkThumb">' +
              '</div>' +
              '<div class="postRate">' +
              '</div>' +
            '</div>' +
        '<button type="button" class="add">' +
          '<img src="images/icons/red/icon-red_add.png" width="28" height="28" alt="Add Park">' +
            '<a href="#">ADD PARK</a>' +
        '</button>' +
    '</div>' +
  '</div>';

var infowindow = new google.maps.InfoWindow({
      maxWidth: 300,
      content: contentString,
      closeinfoWindowURL: 'images/icons/red/icon-red_close.png'
    });

var markers = new Array();
    
var iconCounter = 0;
    
    
for (var i = 0; i < locations.length; i++) {  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
    map: map,
    icon: icons[iconCounter]
});

markers.push(marker);

google.maps.event.addListener(marker, 'click', (function(marker, i) {
  return function() {
    infowindow.setContent(locations[i][2]);
    infowindow.open(map, marker);
  }
    })(marker, i));
      
iconCounter++;
  
if(iconCounter >= iconsLength) {
        iconCounter = 0;
  }  
}

//NEW CODE ATTEMPTING TO ADD A CLASS USING A JQUERY HOOK (Breaks the Map)/////////////////////////////////////////////////////////

// google.maps.event.addListener(popup, 'domready', function() {
//     var infowindow = $('#hook').parent().parent().addClass("infowWindow-wrapper");
//     var infowindow = $('#hook').parent().addClass("infowWindow");
//     });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function autoCenter() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {  
        bounds.extend(markers[i].position);
      }
    map.fitBounds(bounds);
    }
    
    autoCenter();

// google.maps.event.addListener(marker, 'click', function() {
//     infowindow.open(map,marker);
//   });

google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, this);
        map.panTo(loc);
    });
} 

////CREDIT - http://chrisltd.com/blog/2013/08/google-map-random-color-pins//////////////////////////////

///////////////////////////////////////////// LOADER //////////////////////////////////////////////////


google.maps.event.addDomListener(window, 'load', initialize);






