import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home/welcome', component: HomeComponent },
            { path: '**', component: NotFoundComponent }
          ], {
              useHash: true,
              enableTracing: true
          })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
