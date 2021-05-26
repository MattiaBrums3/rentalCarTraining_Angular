import {
  Component, Input, OnInit, Output,
  EventEmitter
} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {CategoryService} from '../../../services/category.service';
import {VehicleService} from '../../../services/vehicle.service';
import {FORMBUTTON, UNDOBUTTON} from '../../../configs/my-configs';
;

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {
  @Input() entity: string;
  @Input() action: string;
  @Input() object: any;

  @Output() emitter = new EventEmitter<any>();

  title: string;

  saveButton = FORMBUTTON;
  undoButton = UNDOBUTTON;

  service: any;

  constructor(private userService: UserService,
              private categoryService: CategoryService,
              private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getService();
    this.getTitle();
  }

  getService() {
    switch (this.entity) {
      case 'users':
        this.service = this.userService;
        break;
      case 'categories':
        this.service = this.categoryService;
        break;
      case 'vehicles':
        this.service = this.vehicleService;
        break;
    }
  }

  getTitle() {
    switch (this.entity) {
      case 'users':
        if (this.action === 'new') {
          this.title = 'Nuovo Utente';
        } else {
          this.title = 'Modifica Utente';
        }
        break;
      case 'categories':
        if (this.action === 'new') {
          this.title = 'Nuova Categoria';
        } else {
          this.title = 'Modifica Categoria';
        }
        break;
      case 'vehicles':
        if (this.action === 'new') {
          this.title = 'Nuovo Veicolo';
        } else {
          this.title = 'Modifica Veicolo';
        }
        break;
      case 'rentals':
        if (this.action === 'new') {
          this.title = 'Nuova Prenotazione';
        } else {
          this.title = 'Modifica Prenotazione';
        }
    }
  }

  btnClick(event: any) {
    this.emitter.emit(event);
  }

  changeCategoryValue(selection) {
    this.object.idCategory = parseInt(selection);
  }
}
