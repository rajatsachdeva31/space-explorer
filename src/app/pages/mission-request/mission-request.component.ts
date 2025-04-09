import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mission-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mission-request.component.html',
  styleUrls: ['./mission-request.component.scss']
})
export class MissionRequestComponent implements OnInit {
  missionForm: FormGroup;
  planets = [
    'Mercury',
    'Venus',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'ISS Mission',
    'Moon Mission',
    'Deep Space Exploration'
  ];

  constructor(private fb: FormBuilder) {
    this.missionForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mission: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.missionForm.valid) {
      console.log(this.missionForm.value);
      // Here you would typically send the form data to a service
      this.missionForm.reset();
    }
  }
}