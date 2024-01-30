import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { UserListComponent } from './users/userList/user-list/user-list.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductItemComponent } from './shop/product-item/product-item.component';

export const routes: Routes = 
[
    { path: '', component: ExampleComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'form', component: ReactiveFormComponent },
    { path: 'users', component: UserListComponent },
    { path: 'shop', component: ProductListComponent },
    { path: 'product/:id', component: ProductItemComponent },
];
