import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "assets/im1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "assets/yat.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/im2.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/yy.jpg", status: "En Construction" }
  ];

  showAddress(residence: Residence) {
    if (residence.address === "inconnu") {
      alert("L’adresse de cette résidence est inconnue !");
    } else {
      alert("Adresse : " + residence.address);
    }
  }

  favorites: Residence[] = [];

  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
      alert(residence.name + " ajoutée aux favoris !");
    }
  }

  searchText: string = "";
}