import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = 
[
    {
        path: '',
        component: ExampleComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    }
];
