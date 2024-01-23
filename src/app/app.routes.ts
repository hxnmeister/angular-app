import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { UserListComponent } from './users/userList/user-list/user-list.component';

export const routes: Routes = 
[
    { path: '', component: ExampleComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'form', component: ReactiveFormComponent },
    { path: 'users', component: UserListComponent }
];
