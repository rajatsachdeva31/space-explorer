import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../../services/nasa-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nasa-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa-feed.component.html',
  styleUrls: ['./nasa-feed.component.scss'],
})
export class NasaFeedComponent implements OnInit {
  apod: any;

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.nasaApiService.getApod().subscribe((data) => {
      this.apod = data;
      console.log(data)
    });
  }
}