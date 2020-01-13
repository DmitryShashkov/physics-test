import { NgModule } from '@angular/core';
import { TestModule } from './test/test.module';

const features = [TestModule];

@NgModule({
  imports: features,
  exports: features,
})
export class FeaturesModule {}
