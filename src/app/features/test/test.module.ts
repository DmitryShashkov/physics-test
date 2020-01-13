import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chanceProvider } from '@app/shared/providers/chance.provider';
import { TestComponent } from './test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestComponent],
  exports: [TestComponent],
  providers: [chanceProvider],
})
export class TestModule {}
