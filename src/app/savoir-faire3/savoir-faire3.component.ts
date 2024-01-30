import { Component, ElementRef, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ObjectService } from '../object';

@Component({
    selector: 'app-savoir-faire3',
    templateUrl: './savoir-faire3.component.html',
    styleUrls: ['./savoir-faire3.component.css'],
    standalone: true,
    imports: [NgClass, NgFor, NgIf]
})
export class SavoirFaire3Component implements OnInit {
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
    ),
    new ObjectService( 3,
      "./../../assets/images/filtration_entretien.jpg",
      "./../../assets/images/icon_filtration-entretien.png",
      "Filtrations et Entretien",
      "Notre société de taille humaine  ne se contente pas de construire ou restauré des piscines d'exception, nous nous. Engageons également à assurer leur bon fonctionnement à long terme. Nos experts en technique garantissent une eau de qualité irréprochable, offrant une expérience de baignade saine et agréable. Notre service d'entretien complet vous libère ainsi des tracas ou même des doutes, vous permettant de profité pleinement de votre piscine. Des appareils de qualité permettent d'avoir des rapports complets sur votre qualité d'eau. Des installations de groupes filtrant en adéquation avec votre piscine, l'imitant ainsi les problématiques en pleine saison."
      ),
      new ObjectService(4,
        "./../../assets/images/conseil_personalise.jpg",
        "./../../assets/images/icon_conseil.png",
        "Conseil Personnalisé",
        "Nous comprenons que chaque projet est unique et important. C'est pourquoi nos conseillers dédiés chez Solution piscine sont là pour échanger sur vos besoins spécifiques, vous guidant ainsi à chaque étape du processus. Optez pour la qualité et la personnalisation avec Solution Piscine, votre partenaire de confiance pour tous vos projets. Nous réalisons également des études de sols avec des sociétés de qualité, ce qui nous permet vraiment de s'adapter à tout type de terrains ainsi qu'aux changements climatiques. "
      ),
      new ObjectService(5,
        "./../../assets/images/conseil_personalise.jpg",
        "./../../assets/images/icon_conseil.png",
        "Conseil Personnalisé",
        "Nous vous proposons des systèmes de sécurité conformant à la réglementation. Car bien entendu quel bonheur de pouvoir se rafraîchir dans sa piscine lorsqu'il fait chaud mais s'il est agréable de posséder une piscine, il est indispensable de la sécuriser. C'est pour cela que notre équipe conseillera au mieux afin de subvenir à vos attentes. Plusieurs systèmes sont possibles allant de la bâche à l'abri, laissé nous la chance de vous conseiller permettant la sérénité"
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

