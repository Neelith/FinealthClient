import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartOptionsService } from './services/echart-options.service';
import { PersistanceModule } from '../persistance/persistance.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    PersistanceModule
  ],
  exports: [
    NgxEchartsModule
  ],
  providers: [EchartOptionsService]
})
export class GraphsModule {}
