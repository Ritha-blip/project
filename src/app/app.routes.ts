import { Routes } from '@angular/router';
import { Home } from './ui/home/home';
import { Product } from './ui/product/product';
import { Singleview } from './ui/singleview/singleview';
import { Contact } from './ui/contact/contact';
import { About } from './ui/about/about';





export const routes: Routes = [
    {path:'',component:Home},
   {path:'home',component:Home},
{path:'product',component:Product},
{path:'singleview/:id',component:Singleview},
{path:'contact',component:Contact},
{path:'about',component:About}

   
   
   
];
