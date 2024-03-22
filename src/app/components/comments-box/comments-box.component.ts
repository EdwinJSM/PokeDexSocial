import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.css']
})
export class CommentsBoxComponent implements OnInit {

  @Input() data?:any;
  @Input() pokemonName?:any;
  comments: any[] = [];
  existComments: boolean = false;
  name: string = ''
  message: string = ''
  constructor(private cs:CommentsService) { }

  ngOnInit(): void {
    if(this.data !== null || this.data !== undefined)
    {
      this.comments = this.data
      this.existComments = true;
    }
  }
  getComments()
  {
    this.comments = this.cs.getCommentsByName(this.pokemonName)
  }

  addComment(): void {
    this.cs.addComment(this.pokemonName, this.name, this.message);
    this.message = ''
    this.name = ''
    this.getComments()
  }

  deleteComment(id:string)
  {
    this.cs.deleteCommentById(id);
    this.getComments()
  }
}
