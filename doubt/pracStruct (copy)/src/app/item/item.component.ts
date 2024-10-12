import { Component,OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  
  items:any[] = [];
  newItem = {name:'',description:''};

  constructor(private itemSer : ItemsService){}

  ngOnInit():void{
    this.loadItems();
    }

    loadItems():void{
      this.itemSer.createItems(this.newItem).subscribe(data =>{
        this.items  = data;      })
    }
}
