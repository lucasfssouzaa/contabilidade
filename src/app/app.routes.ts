import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "sobre", component: SobreComponent},
    {path: "servicos", component: ServicosComponent},
    {path: "contato", component: ContatoComponent}
];
