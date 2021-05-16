import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admingopass';
  countryData = [
    {
      "name": "Allemagne",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "Etats Unis",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "Royaume Uni",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Espagne",
      "value": 33000,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Italie",
      "value": 35800,
      "extra": {
        "code": "it"
      }
    }
  ];

  cityData = [
    {
      "name": "Lubumbashi",
      "value": 40632,
      "extra": {
        "code": "lu"
      }
    },
    {
      "name": "Matadi",
      "value": 50000,
      "extra": {
        "code": "mat"
      }
    },
    {
      "name": "Equateur",
      "value": 36745,
      "extra": {
        "code": "eq"
      }
    },
    {
      "name": "Kisangani",
      "value": 36240,
      "extra": {
        "code": "ki"
      }
    },
    {
      "name": "Maniema",
      "value": 33000,
      "extra": {
        "code": "ma"
      }
    },
    {
      "name": "Kananga",
      "value": 35800,
      "extra": {
        "code": "ka"
      }
    }
  ];
}
