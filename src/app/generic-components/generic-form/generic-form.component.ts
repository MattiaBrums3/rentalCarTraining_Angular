import {Component, Input, OnChanges, Output} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CategoryService} from '../../services/category.service';
import {VehicleService} from '../../services/vehicle.service';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnChanges {
  @Input() entity: string;
  @Input() action: string;
  @Input() object: any;

  service: any;

  constructor(private userService: UserService,
              private categoryService: CategoryService,
              private vehicleService: VehicleService) { }

  ngOnChanges(): void {
    this.getService();
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
}
