import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss']
})
export class LocationMapComponent implements OnInit {

  zoom = 11;
  center: google.maps.LatLngLiteral = {
    lat: -31.2532,
    lng: 146.9211
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    // zoomControl: false,
    // scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
}
