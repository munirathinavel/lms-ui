import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { BookListComponent } from './modules/book-list/book-list.component';
import { CreateBookComponent } from './modules/create-book/create-book.component';
import { CreateMemberComponent } from './modules/create-member/create-member.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { IssueBookComponent } from './modules/issue-book/issue-book.component';
import { IssuedBookListComponent } from './modules/issued-book-list/issued-book-list.component';
import { LoginComponent } from './modules/login/login.component';
import { MemberListComponent } from './modules/member-list/member-list.component';
import { ReturnBookComponent } from './modules/return-book/return-book.component';
import { UpdateBookComponent } from './modules/update-book/update-book.component';
import { UpdateMemberComponent } from './modules/update-member/update-member.component';
import { ViewBookComponent } from './modules/view-book/view-book.component';
import { ViewMemberComponent } from './modules/view-member/view-member.component';
import { ViewReturnedBookListComponent } from './modules/view-returned-book-list/view-returned-book-list.component';



const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    { path: 'memberlist', component: MemberListComponent },
  { path: 'addmember', component: CreateMemberComponent },
  { path: 'updatemember/:id', component: UpdateMemberComponent },
  { path: 'viewmember/:id', component: ViewMemberComponent },
  { path: 'booklist', component: BookListComponent },
  { path: 'addbook', component: CreateBookComponent },
  { path: 'updatebook/:id', component: UpdateBookComponent },
  { path: 'viewbook/:id', component: ViewBookComponent },
  { path: 'issuebook/:id', component: IssueBookComponent },
  { path: 'issuebook', component: IssueBookComponent },
  { path: 'returnbook', component: ReturnBookComponent },
  { path: 'returnbook/:id', component: ReturnBookComponent },
  { path: 'issuedbooklist', component: IssuedBookListComponent },
  { path: 'viewreturnedbook', component: IssuedBookListComponent },
  { path: 'returnedbooks', component: ViewReturnedBookListComponent },
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'booklist', component: BookListComponent }
   ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
