import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommentsService } from './comments.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<any> {
  constructor(private commentS: CommentsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] {
    let name = route.paramMap.get('name');
    if(name)
    {
      return this.commentS.getCommentsByName(name)
    }
    else{
      return []
    }
  }
}
