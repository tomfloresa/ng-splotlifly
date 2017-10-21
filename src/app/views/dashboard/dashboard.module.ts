import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { UIViewsModule } from './../../ui-compotents/ui-components.module';

// Components
import { DashboardComponent } from './dashboard.component';
import { SearchResultsComponent } from './search-results/search-results.component';

// Services
import { SpotifyQueriesService } from './../../services/spotify-queries.service';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'busqueda',
                component: SearchResultsComponent
            }
        ]
    }
];

@NgModule({
  declarations: [
    DashboardComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    UIViewsModule,
    RouterModule.forChild(routes),
  ],
  providers: [

  ]
})
export class DashboardModule { }
