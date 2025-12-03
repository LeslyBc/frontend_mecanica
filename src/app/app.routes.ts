import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CarouselComponent } from './components/carousel/carousel.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "formulario", component: FormularioComponent},
    {path: "carousel", component: CarouselComponent},
    {path: "navbar", component: NavbarComponent},
    {path: "footer", component: FooterComponent},
];
