import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterBlogApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterBlogApplicationCoreModule } from 'app/core/core.module';
import { JhipsterBlogApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterBlogApplicationHomeModule } from './home/home.module';
import { JhipsterBlogApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterBlogApplicationSharedModule,
    JhipsterBlogApplicationCoreModule,
    JhipsterBlogApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterBlogApplicationEntityModule,
    JhipsterBlogApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterBlogApplicationAppModule {}
