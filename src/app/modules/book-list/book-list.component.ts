import { Observable } from "rxjs";
import { BookService } from "../book.service";
import { AdminService } from "../admin.service";
import { Book } from "../book";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Observable<Book[]>;

  constructor(private bookService: BookService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getBooksList();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  viewBook(id: number){
    this.router.navigate(['viewbook', id]);
  }

  issueBook(id: number){
    this.router.navigate(['issuebook', id]);
  }

  updateBook(id: number){
    this.router.navigate(['updatebook', id]);
  }
}