import { Observable } from "rxjs";
import { BookService } from "../book.service";
import { Book } from "../book";
import { Router } from '@angular/router';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements AfterViewInit {
  books!: Book[];
 
  displayedColumns: string[] = ['title', 'subject', 'publisher', 'language'];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  constructor(private bookService: BookService,
    private router: Router) {
      // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    
   this.bookService.getBooksList().subscribe(res => {
     this.books = res;
      console.log("this.books ==>" + this.books );
      this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
    
    }

    ngAfterViewInit() {
     // this.dataSource.paginator = this.paginator;
     // this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  //  ngOnInit() {
  //    this.reloadData();
  //  }

  reloadData() {
     this.bookService.getBooksList().subscribe(res => this.books = res);
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

