import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',
    loadComponent: () => import("./home/home.component").then(module => module.HomeComponent)
    },
    {path:'home',
    loadComponent: () => import("./home/home.component").then(module => module.HomeComponent)
    },
    {path:'contact',
    loadComponent: () => import("./contact2/contact2.component").then(module => module.Contact2Component)
    },
    {path:'learn-arabic',
    loadComponent: () => import("./learn-arabic/learn-arabic.component").then(module => module.LearnArabicComponent)
    },
    {path:'learn-french',
    loadComponent: () => import("./learn-french/learn-french.component").then(module => module.LearnFrenchComponent)
    },
    {path:'register',
    loadComponent: () => import("./register/register.component").then(module => module.RegisterComponent)
    }
    
];
