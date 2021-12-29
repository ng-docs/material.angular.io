import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_ID, NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MaterialDocsApp} from './material-docs-app';
import {MATERIAL_DOCS_ROUTES} from './routes';
import {NavBarModule} from './shared/navbar';
import {CookiePopupModule} from './shared/cookie-popup/cookie-popup-module';

const prefersReducedMotion = typeof matchMedia === 'function' ?
  matchMedia('(prefers-reduced-motion)').matches : false;

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'material-docs'}),
    BrowserAnimationsModule.withConfig({disableAnimations: prefersReducedMotion}),
    RouterModule.forRoot(MATERIAL_DOCS_ROUTES, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'corrected',
    }),
    NavBarModule,
    CookiePopupModule,
  ],
  declarations: [MaterialDocsApp],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: APP_ID, useFactory: () => 'material-docs'},
  ],
  bootstrap: [MaterialDocsApp],
})
export class AppModule {
}
