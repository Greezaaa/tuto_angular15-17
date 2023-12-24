import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // Corrected the property name to styleUrls
})
export class HeroesListComponent {
  deletedHeroes: Hero[] = [];

  alertMessage: string | null = null;

  heroes: Hero[] = [
    {
      id: 1,
      name: 'Spiderman',
      age: 30
    },
    {
      id: 2,
      name: 'Ironman',
      age: 40
    },
    {
      id: 3,
      name: 'Hulk',
      age: 50
    }
  ];
  alert(value: string): void {
    this.alertMessage = value;
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert(): void {
    this.alertMessage = null;
  }

  deleteHero(id: number): void {
    const heroToDelete: Hero | undefined = this.heroes.find((hero: Hero) => hero.id === id);
    if (!heroToDelete) {
      console.warn(`Hero with id ${ id } not found`);
      return;
    }
    this.deletedHeroes = [...this.deletedHeroes, heroToDelete];
    this.alert(heroToDelete.name + ' was deleted from the list')
    this.heroes = this.heroes.filter((hero: Hero) => hero.id !== id);
  }

  restoreHero(id: number): void {
    const heroToRestore: Hero | undefined = this.deletedHeroes.find((hero: Hero) => hero.id === id);
    if (!heroToRestore) {
      console.warn(`Hero with id ${ id } not found`);
      return;
    }
    this.heroes = [...this.heroes, heroToRestore];
    this.alert(heroToRestore.name + ' was restored successfully')
    this.deletedHeroes = this.deletedHeroes.filter((hero: Hero) => hero.id !== id);
  } 

  resetDeletedHeroes(): void {
    this.deletedHeroes = [];
  }
}

