import { Component } from '@angular/core';
import { GenericEditComponent } from 'src/app/components/generic/form/generic-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Input, Name } from 'src/app/form/Input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HostRouter } from 'src/app/router/HostRouter';
import { HostsService } from 'src/app/services/hosts.service';

@Component({
  selector: 'app-hosts-edit',
  templateUrl: '../generic/form/generic-form.component.html',
  styleUrls: [],
})
export class HostsEditComponent extends GenericEditComponent {
  public singularResource = 'host';
  public routerHelper = HostRouter;
  public inputs: Input[] = [new Name()];

  constructor(
    protected service: HostsService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected snackBar: MatSnackBar
  ) {
    super(service, router, route, snackBar);
  }
}
