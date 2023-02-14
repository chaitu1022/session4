import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { NgswitchExampleComponent } from './ngswitch-example/ngswitch-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ParentChildCommunicationComponent } from './parent-child-communication/parent-child-communication.component';
import { ChildComponentComponent } from './parent-child-communication/child-component/child-component.component';
import { DummyPipe } from './dummy.pipe';
import { GenderFindPipe } from './pipe-example/gender-find.pipe';

const routes: Route[] = [
  { path: '', redirectTo: 'ngfor', pathMatch:'full' },
  { path: 'ngfor', component: NgforExampleComponent},
  { path: 'ngswitch', component: NgswitchExampleComponent},
  { path: 'pipe', component: PipeExampleComponent},
  { path: 'communication', component: ParentChildCommunicationComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NgforExampleComponent,
    NgswitchExampleComponent,
    PipeExampleComponent,
    HeaderComponent,
    ParentChildCommunicationComponent,
    ChildComponentComponent,
    DummyPipe,
    GenderFindPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
