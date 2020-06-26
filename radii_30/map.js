// make an object for map styles
const palette = {
    'dark': { 'mapStyle': 'mapbox://styles/sghan/ck1ljdcmy16fc1cpg0f4qh3wu'},
    'light':{'mapStyle':'mapbox://styles/sghan/ck35793ez3b7q1dpmdl5ek4g2',
    }};

// import mapboxgl to div container
let map = new mapboxgl.Map({
    container: 'map',
    style: palette['dark']['mapStyle'],
    center: [-74.070000, 40.722535],
    zoom: 12
});

// add a controller (zoom and direction)
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

// set variables for file addresses
const urlUnmatchedLion1 = 'data/lion_street_filtered_0_60000.unmatched.geojson';
const urlUnmatchedLion2 = 'data/lion_street_filtered_60000_120000.unmatched.geojson';
const urlUnmatchedLion3 = 'data/lion_street_filtered_120000_.unmatched.geojson';

const urlShstSegment = 'data/shst_segment.geojson';

map.on('load', function () {

    // get source from url
    window.setInterval(function() {
        map.getSource('lion1').setData(urlUnmatchedLion1);
        map.getSource('lion2').setData(urlUnmatchedLion2);
        map.getSource('lion3').setData(urlUnmatchedLion3);
        map.getSource('shst').setData(urlShstSegment)
    }, 2000);

    // add sources to the Map
    map.addSource('lion1', { type: 'geojson', data:urlUnmatchedLion1, 'generateId': false});
    map.addSource('lion2', { type: 'geojson', data:urlUnmatchedLion2, 'generateId': false});
    map.addSource('lion3', { type: 'geojson', data:urlUnmatchedLion3, 'generateId': false});
    map.addSource('shst', { type: 'geojson', data:urlShstSegment, 'generateId': false});

    // add a layer and set properties
    map.addLayer({
        "id": "shst",
        "source": "shst",
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": '#2196F3',
            "line-width": 2,
        }
    });

    map.addLayer({
        "id": "lion1",
        "source": "lion1",
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": '#F44336',
            "line-width": 2,
        }
    });

    map.addLayer({
        "id": "lion2",
        "source": "lion2",
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": '#F44336',
            "line-width": 2,
        }
    });

    map.addLayer({
        "id": "lion3",
        "source": "lion3",
        "type": "line",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": '#F44336',
            "line-width": 2,
        }
    });

});
