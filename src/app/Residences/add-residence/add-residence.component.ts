import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-residences',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidencesComponent {
  // Résidence à ajouter
  newResidence = {         
    name: '',
    address: '',
    apartments: 0,
    status: 'Disponible',
    image: 'assets/default.jpg', // Image par défaut
  };

  // Événement pour transmettre la résidence au composant parent
  @Output() residenceAdded = new EventEmitter<any>();

  // Méthode appelée lors de la soumission du formulaire
  addResidence() {
    this.residenceAdded.emit(this.newResidence); // Émettre l'événement
    this.resetForm(); // Réinitialiser le formulaire
  }

  // Réinitialise le formulaire
  resetForm() {
    this.newResidence = {
      name: '',
      address: '',
      apartments: 0,
      status: 'Disponible',
      image: 'assets/default.jpg',
    };
  }
}
