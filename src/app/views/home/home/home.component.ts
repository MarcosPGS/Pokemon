import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HomeService } from '../home.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  cards: any = null;
  card: any = null;
  nomePokemon: string;
  modelChanged = new Subject<string>();
  habilitarBotaoPesquisar = false;
  mostarCard = true;
  constructor(private homeService: HomeService, private router: Router,
    ) {
      this.modelChanged.pipe(debounceTime(300)).subscribe(() => {
        if (this.nomePokemon.length >= 3) {
          // this.habilitarBotaoPesquisar = true;
          this.buscarPorNome();
        }
        // if (this.nomePokemon.length < 3) {
        //   this.habilitarBotaoPesquisar = false;
        // }
      });
    }

  ngOnInit(): void {
    this.listarTodosCards();
  }


  buscarPorNome(): void{
    this.homeService.buscarPorNome(this.nomePokemon).subscribe((resp) => {
      if (resp.cards.length > 0) {
        this.cards = resp.cards;
        this.mostarCard = true;
      }
      if (resp.cards.length <= 0) {
        this.mostarCard = false;
      }
      this.nomePokemon = null;
      this.habilitarBotaoPesquisar = false;
    }, error => {alert(error);
    });
  }

  detalhar(c: any): void{
    this.card = c;
    this.router.navigate(['/card-details'], {
      queryParams: { card: JSON.stringify(c) },
      skipLocationChange: true
    });
  }
  listarTodosCards(): void {
    this.homeService.listarTodosCards().subscribe((resp): void => {
      this.cards = resp.cards;
      this.cards.sort((a, b) => (a.name < b.name) ? -1 : 1);
    });
  }

  pesquisar(): void {
    this.modelChanged.next();
  }

}
