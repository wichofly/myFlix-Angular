import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { DirectorComponent } from '../director/director.component';
import { GenreComponent } from '../genre/genre.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  // lifecycle hook. ngOnInit() is called when Angular is done creating the component.
  ngOnInit(): void {
    this.getMovies();
    this.getUser();
  }

  /**
   * Gets movies from API call and sets the movies state to return JSON file.
   * @returns array holding movies object
   * @function getAllMovies
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Opens the user director dialog from DirectorComponent to displaying details
   * @param name 
   * @param bio 
   * @param birthyear 
   */
  openDirectorDialog(name: string, bio: string, birthyear: string): void {
    this.dialog.open(DirectorComponent, {
      data: {
        name: name,
        bio: bio,
        birthyear: birthyear,
      },
      width: '500px',
    });
  }

  /**
   * Opens the user genre dialog from GenreComponent to displaying details
   * @param name 
   * @param description 
   */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        name: name,
        description: description,
      },
      width: '500px',
    });
  }

  /**
   * Opens the user synopsis dialog from SynopsisComponent to display details
   * @param title 
   * @param description 
   */
  openSynopsisDialog(title: string, description: string): void {
    this.dialog.open(SynopsisComponent, {
      data: {
        title: title,
        description: description,
      },
      width: '500px',
    });
  }

  /**
   * Gets users from API call to get their favorite movies list.
   * @return array holding Favorite movie user's list
   * @function getUser 
   */
  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favoriteMovies = resp.favoriteMovies;
    });
  }

  /**
   * Checks if a movie is included in the user's list of favorite movies
   * @param id 
   * @returns true, if the movie is a favorite movie, else false
   */
  isFav(id: string): boolean {
    return this.favoriteMovies.includes(id);
  }

  /**
   * Adds a movie to the list of favorite movies via an API call
   * @param id 
   * @param title 
   * @function addFavoriteMovie
   */
  addToFavoriteMovies(id: string, title: string): void {
    console.log(id);
    this.fetchApiData.addFavoriteMovie(id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
      this.snackBar.open(
        '"' + title + '"' + ' has been added to your favorites.',
        'OK',
        {
          duration: 2000,
        }
      );
    });
  }

  /**
   * Removes a movie from the list of favorite movies via an API call
   * @param id 
   * @param title 
   * @function removeFavoriteMovie
   */
  removeFromFavoriteMovies(id: string, title: string): void {
    console.log(id);
    this.fetchApiData.removeFavoriteMovie(id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
      this.snackBar.open(
        '"' + title + '"' + ' has been removed from your favorites.',
        'OK',
        {
          duration: 2000,
        }
      );
    });
  }
}
