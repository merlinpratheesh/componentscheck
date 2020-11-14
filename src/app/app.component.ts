import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrls: ['autocomplete-simple-example.css'],
})
export class AutocompleteSimpleExample {
  options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl();

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */