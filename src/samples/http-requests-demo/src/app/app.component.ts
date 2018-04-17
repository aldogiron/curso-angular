import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const serverUrl = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class AlbumsService {

  constructor(private http: HttpClient) {
  }

  get(id: number) {
    const url = `${serverUrl}/albums/${id}`;
    return this.http.get<Album>(url);
  }

  getPhotos(albumId: number) {
    const url = `${serverUrl}/photos`;
    const params = new HttpParams()
      .set('albumId', albumId.toString());
    return this.http.get<Photo[]>(url, { params });
  }
}


@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  get(id: number) {
    const url = `${serverUrl}/users/${id}`;
    return this.http.get<User>(url);
  }
}

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {
  }

  get(id: number) {
    const url = `${serverUrl}/posts/${id}`;
    return this.http.get<Post>(url);
  }

  getComments(postId: number) {
    const url = `${serverUrl}/comments`;
    const params = new HttpParams().set('postId', postId.toString());
    return this.http.get<Comment[]>(url, { params });
  }
}


export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  post: Post;
  postComments: Comment[];
  album: Album;
  albumsPhotos: Photo[];

  constructor(
    private albums: AlbumsService,
    private posts: PostsService,
    private users: UsersService,
  ) {

  }

  ngOnInit(): void {

    const albumId = 1;
    const postId = 2;


    // GetAlbum y GetPost se ejecutan en paralelo
    // GetPhotos se ejecuta despues de haber terminado GetAlbum
    // GetComments se ejecuta despues de haber terminado GetPost
    // Cuando todos los requests terminan, se ejecuta el console.log

    const primerThread = this.albums.get(albumId)
      .do(album => this.album = album)
      .mergeMap(album => this.albums.getPhotos(album.id))
      .do(photos => this.albumsPhotos = photos);

    const segundoThread = this.posts.get(postId)
      .do(post => this.post = post)
      .mergeMap(post => this.posts.getComments(post.id))
      .do(comments => this.postComments = comments);

    Observable.zip(primerThread, segundoThread)
      .subscribe(() => {
        console.log('todos los requests completados');
      });

  }
}
