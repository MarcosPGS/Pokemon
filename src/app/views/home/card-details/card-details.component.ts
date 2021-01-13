import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAttackComponent } from '../modal-attack/modal-attack.component';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.sass']
})
export class CardDetailsComponent implements OnInit {
  card: any = null;
  cardBuscado: any = null;
  ataques: any[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private homeService: HomeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(resp => {
      if (resp.card) {
        this.card = JSON.parse(resp.card);
      }
    });
    this.buscarPorId();
}

buscarPorId(): void{
  this.homeService.buscarPorId( this.card.id).subscribe((resp) => {
    this.cardBuscado = resp;
    this.ataques = resp.card.attacks;
  }, error => {
    alert(error);
  });
}

mostrarModalAtaque(ataque: any): void {
  const dialogRef = this.dialog.open(ModalAttackComponent, {
    data: {
      ...ataque,
    }
  });
}

voltar(): void {
  this.router.navigate(['/']);
}

}
