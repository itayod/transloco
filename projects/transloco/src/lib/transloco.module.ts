import { NgModule } from '@angular/core';
import { TranslocoDirective } from './transloco.directive';
import { TRANSLOCO_PARSER, DefaultParser } from './transloco.parser';
import { TranslocoParamsPipe } from './transloco-params.pipe';
import { TranslocoPipe } from './transloco.pipe';
import { DefaultHandler, TRANSLOCO_MISSING_HANDLER } from './transloco-missing-handler';

@NgModule({
  declarations: [TranslocoDirective, TranslocoParamsPipe, TranslocoPipe],
  providers: [
    {
      provide: TRANSLOCO_PARSER,
      useClass: DefaultParser
    },
    {
      provide: TRANSLOCO_MISSING_HANDLER,
      useClass: DefaultHandler
    }
  ],
  exports: [TranslocoDirective, TranslocoParamsPipe, TranslocoPipe]
})
export class TranslocoModule {}
