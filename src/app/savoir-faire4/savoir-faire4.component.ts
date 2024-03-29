import { Component, ElementRef, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ObjectService } from '../object';

@Component({
    selector: 'app-savoir-faire4',
    templateUrl: './savoir-faire4.component.html',
    styleUrls: ['./savoir-faire4.component.css'],
    standalone: true,
    imports: [NgClass, NgFor, NgIf]
})
export class SavoirFaire4Component implements OnInit {
  nbWordLimite :number=50
  visible :boolean=false;
  imageBlock1 = "./../../assets/images/piscine_savoir_faire_v1.jpg"
  displayEntireDescription : boolean[] = [false,false,false,false] // Le nombre dépend de la variable images

  images : ObjectService[]= [
    new ObjectService(1,"./../../assets/images/construction_traditionnelle2.jpg",
    "./../../assets/images/icon_construction-traditionnelle.png",
    "Construction Traditionnelle",
    "Nous sommes spécialisées dans la conception et construction sur mesure de piscine traditionnelle. Nous réalisations vos envies, en assemblant solidité et longévité. Tous les ouvrages (constructions, réseaux, filtrations, étanchéités.) sont couverts par une responsabilité civile professionnelle et d'une assurance décennale. Avec une forte expérience dans le domaine de la piscine, nous sauront vous écoutez, vous conseillé, et vous accompagné dans votre projet de construction. Nous saurons également vous accompagner dans le choix technique de votre projet et également dans le choix esthétique de votre revêtement afin que. Cela correspond à vos attentes. Chaque projet et unique, c'est pour cela que nous étudierons vigoureusement le type de terrain, vos envies et votre budget."
    ),
    new ObjectService(2,
      "./../../assets/images/renovation_etancheite.jpg",
      "./../../assets/images/icon_renovation-etancheite.png",
      "Rénovation et Étanchéité",
      "Vous envisagez de rénover votre ancienne piscine, notre équipe expérimentée excelle dans la rénovation complète. Nous tous les travaux de rénovation de votre piscine telle que le changement et l'amélioration des pièces a sceller, des réseaux (canalisation). L'installation d'une nouvelle membrane d'étanchéité (PVC armé), le changement de vos margelles et pour finir une remise à la norme de votre Système de sécurité. Travaillant avec sérénité nous mettons en œuvre un diagnostic complet avant travaux. Nous redonnons vie à votre piscine, prolongeant ainsi sa durée tout en lui insufflant une touche contemporaine."
    )]

  constructor(private el: ElementRef)  {}
  
  ngAfterViewInit() {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              console.log('2 : ',entry)
          this.visible=entry.isIntersecting;
          });
      });
      observer.observe(this.el.nativeElement);
  }
  ngOnInit(): void {
    this.calculateDisplayDescription(this.images)
  }

  displayFirstNWord(words : string[]):string{
    let sentenceTruced : string = ""
    for (var i = 0; i < this.nbWordLimite; i++) {
      sentenceTruced = sentenceTruced.concat(' ').concat(words[i])
    }
    sentenceTruced = sentenceTruced.concat('...')
    return sentenceTruced
  }

  displayAll(words : string[]):string{
    let sentenceTruced : string = ""
    for (var i = 0; i < this.nbWordLimite; i++) {
      sentenceTruced = sentenceTruced.concat(' ').concat(words[i])
    }
    sentenceTruced = sentenceTruced.concat('...')
    return sentenceTruced
  }

  calculateDisplayDescription(images : ObjectService[]):void{
    for (var i = 0; i < images.length; i++) {
      this.displayEntireDescription[i] = images[i].description.split(' ').length > this.nbWordLimite
    }
  }

  savoirToggle(indexOfelement : number){
    this.displayEntireDescription[indexOfelement] = !this.displayEntireDescription[indexOfelement]
  }

}

