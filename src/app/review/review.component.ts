import { Component, OnInit } from '@angular/core';
import { Prospect, Review } from '../object';
import { NgClass, NgFor } from '@angular/common';
import { ReviewsServiceService } from '../services/reviews-service.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  standalone:true,
  imports:[NgClass, NgFor],
  providers:[ReviewsServiceService]
})
export class ReviewComponent implements OnInit{

  reviews : Review[] = []
  reviewsByEtats : boolean[][] = []
  indexMain : number = 0 
  hiddenFlecheDroite :boolean=false
  hiddenFlecheGauche :boolean=true

  constructor(private reviewsService : ReviewsServiceService) { 
  }
  async ngOnInit() {
     await this.retrieveAllReviews();
     this.hiddenFlecheDroite = this.isHiddenFlecheDroite()
     this.hiddenFlecheGauche = this.isHiddenFlecheGauche()

  }
  async retrieveAllReviews() {
    try {
      console.log( 'this.reviewsByEtats 1', this.reviewsByEtats)
      // this.reviewsService.getAllReviews().subscribe( x => console.log("mes donnes :",x))
      const data = await firstValueFrom(this.reviewsService.getAllReviews(),);
      console.log('ma data ', data);
      this.reviews = data;
      this.initialisationReviews();
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des avis', error);
    }
  }

  initialisationReviews(){
    console.log("voila les reviews : ",this.reviews)
    for(let i = 0; i< this.reviews.length; i++){
      console.log("i : ",i)
      if(i==0){
        this.reviewsByEtats.push([false,false,true,false,false])
      }
      if(i==1){
        this.reviewsByEtats.push([false,false,false,true,false])
      }
      if(i>1){
        this.reviewsByEtats.push([false,false,false,false,true])
      }
    }
    console.log( 'this.reviewsByEtats 2', this.reviewsByEtats)
  }


  clickFlecheDroite(){
    console.log("click droit")
    let indexCurrent = this.indexMain
    if(indexCurrent>0){
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent-1])
    }
    if(indexCurrent<this.reviews.length){
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent])
    }
    if(indexCurrent+1<this.reviews.length){
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent+1])
    }
    if(indexCurrent+2<this.reviews.length){
      this.decalageEtatAGauche(this.reviewsByEtats[indexCurrent+2])
    }
    this.indexMain = this.indexMain +1
    this.hiddenFlecheDroite = this.isHiddenFlecheDroite()
    this.hiddenFlecheGauche = this.isHiddenFlecheGauche()
  }

  clickFlecheGauche(){
    console.log("click gauche : ",this.indexMain)
    let indexCurrent = this.indexMain
    if((indexCurrent-2)>=0){
      console.log("blabla")
      this.decalageEtatADroite(this.reviewsByEtats[indexCurrent-2])
    }
    if((indexCurrent-1)>=0){
      this.decalageEtatADroite(this.reviewsByEtats[indexCurrent-1])
    }
    this.decalageEtatADroite(this.reviewsByEtats[indexCurrent])
  
    if(indexCurrent+1<this.reviewsByEtats.length){
      this.decalageEtatADroite(this.reviewsByEtats[indexCurrent+1])
    }
    this.indexMain = this.indexMain -1
    this.hiddenFlecheDroite = this.isHiddenFlecheDroite()
    this.hiddenFlecheGauche = this.isHiddenFlecheGauche()

  }
  decalageEtatADroite(tab: boolean[]) {
    console.log('6--',tab)
    console.log('this.reviews.length : ',this.reviews.length)
    const indexADecaler = tab.findIndex( element => element==true)
      console.log('hihi')
      tab[indexADecaler]=false
      tab[indexADecaler+1]=true
  }

  decalageEtatAGauche(tab : boolean[]) : void{
    const indexADecaler = tab.findIndex( element => element==true)
    if(indexADecaler!=0){
      tab[indexADecaler]=false
      tab[indexADecaler-1]=true
    }
  }

  isHiddenFlecheDroite() : boolean{
    console.log('this.indexMain droite : ',this.reviews.length-1)
    return this.indexMain==this.reviews.length-1
  }
  isHiddenFlecheGauche() : boolean{
    return this.indexMain==0
  }

}
