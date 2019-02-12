import { GameComponent } from './game/game.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
          path: 'jogo',
          component: GameComponent,
          data: {animation: 'Left'}
        },
        {
          path: 'ajuda',
          loadChildren: './help/help.module#HelpModule',
          data: {animation: 'Right'}
        },
        {
          path: '**',
          redirectTo: 'jogo',
        },
        {
          path: '',
          redirectTo: 'jogo',
          pathMatch: 'full',
        },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
