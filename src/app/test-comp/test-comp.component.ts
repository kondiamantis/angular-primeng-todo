import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-test-comp',
  imports: [FormsModule, Checkbox],
  templateUrl: './test-comp.component.html',
  styleUrl: './test-comp.component.css'
})
export class TestCompComponent {

triggerFunction() {
  alert("Triggered");
}
  checked: boolean = true;

  updateCheck(e: any) {
    console.log('update check box');
  }
}
