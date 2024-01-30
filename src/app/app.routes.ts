import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',
    loadComponent: () => import("./home/home.component").then(module => module.HomeComponent)
    },
    {path:'home',
    loadComponent: () => import("./home/home.component").then(module => module.HomeComponent)
    },
    {path:'contact',
    loadComponent: () => import("./contact/contact.component").then(module => module.ContactComponent)
    }
];
