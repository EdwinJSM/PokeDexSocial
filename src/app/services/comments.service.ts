import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  // Method to add a comment
  addComment(pokemonName: string, name: string, message: string): void {
    const comments = this.getComments() || [];
    const currentDate = new Date();
    const newComment = {
      id: this.generateUniqueId(),
      pokemonName: pokemonName,
      name: name,
      date: currentDate.toISOString(),
      message: message
    };
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  // Method to retrieve all comments
  getComments(): any[] {
    const commentsString = localStorage.getItem('comments');
    return commentsString ? JSON.parse(commentsString) : [];
  }

  // Method to retrieve comments by Pokemon name
  getCommentsByName(pokemonName: string): any[] {
    const comments = this.getComments();
    return comments.filter(comment => comment.pokemonName === pokemonName);
  }

  // Method to delete a comment by ID
  deleteCommentById(id: string): void {
    const comments = this.getComments();
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
      comments.splice(index, 1);
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }


  // Method to generate a unique ID
  private generateUniqueId(): string {
    return '_' + Math.random().toString(36).slice(2, 9);
  }
}
