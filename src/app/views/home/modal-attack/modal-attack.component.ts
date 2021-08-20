import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-attack',
  templateUrl: './modal-attack.component.html',
  styleUrls: ['./modal-attack.component.sass']
})
export class ModalAttackComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public ataque: any) { }

  ngOnInit(): void {
  }

}
