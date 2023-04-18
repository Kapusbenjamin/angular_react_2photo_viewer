import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var pannellum: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit   {
  viewer1: any;
  viewer2: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.viewer1 = pannellum.viewer('panorama1', {
      "type": "equirectangular",
      "panorama": "https://pannellum.org/images/alma.jpg",
      "autoLoad": true,
      "hotSpots": [
        {
          "pitch": 14,
          "yaw": 20,
          "type": "info",
          "text": "Lorem ipsum"
        }
      ]
    });

    this.viewer2 = pannellum.viewer('panorama2', {
      "type": "equirectangular",
      "panorama": "https://pannellum.org/images/alma.jpg",
      "autoLoad": true,
      "hotSpots": [
        {
          "pitch": 14,
          "yaw": 20,
          "type": "info",
          "text": "Lorem ipsum"
        }
      ]
    });


  }

  viewer2move(){
    this.viewer2.lookAt(this.viewer1.getPitch(), this.viewer1.getYaw(), this.viewer1.getHfov(), 0)
  };

  viewer1move(){
    this.viewer1.lookAt(this.viewer2.getPitch(), this.viewer2.getYaw(), this.viewer2.getHfov(), 0)
  };

}
