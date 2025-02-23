import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../../core/models/residence';

@Component({
    selector: 'app-residence-details',
    templateUrl: './residence-details.component.html',
    styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
    residenceId!: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.residenceId = +params['id'];
            // Appelle à un service pour récupérer les détails
        });
    }
}
