import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  detalle: any = '';
  constructor(private route: ActivatedRoute, public hs: HeroesService) {
    route.params
      .subscribe(async data => {
        //console.log(data['id'])
        (await hs.detalleHeroe(data['id'])).subscribe((arg: any) => {
          this.detalle = arg
          // console.log(this.detalle)
        });

      })
  }

  ngOnInit(): void {
  }

}
