import { Component, ChangeDetectionStrategy, AfterViewInit, Inject, ElementRef, ViewChild, HostListener } from '@angular/core';

import * as PIXI from 'pixi.js';
import { windowProvider, WINDOW } from '@app/shared/providers/window.provider';

@Component({
  selector: 'nox-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [windowProvider],
})
export class TestComponent implements AfterViewInit {
  app: PIXI.Application;
  loader: PIXI.Loader;
  container: PIXI.Container;

  shipSprite: PIXI.Sprite;

  @ViewChild('renderContainer', { static: true })
  renderContainer: ElementRef;

  constructor (
    @Inject(WINDOW) private window: Window
  ) {}

  ngAfterViewInit () {
    PIXI.utils.sayHello(PIXI.utils.isWebGLSupported() ? 'WebGL' : 'canvas');

    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    this.app = new PIXI.Application({
      width: this.window.innerWidth,
      height: this.window.innerHeight,
    });
    this.loader = new PIXI.Loader();
    this.container = new PIXI.Container();

    const containerElement: HTMLElement = this.renderContainer.nativeElement;
    containerElement.appendChild(this.app.view);

    this.loader
      .add([
        '/assets/sprites/ship.png'
      ])
      .on('progress', this.handleLoadProgress.bind(this))
      .load(this.setupScenes.bind(this));
  }

  private handleLoadProgress = (
    loader: PIXI.Loader,
    resource: PIXI.LoaderResource
  ): void => {
    console.warn(resource.url, loader.progress);
  };

  private setupScenes = (): void => {
    this.shipSprite = new PIXI.Sprite(
      this.loader.resources['/assets/sprites/ship.png'].texture
    );
    this.shipSprite.scale = new PIXI.Point(0.25, 0.25);
    this.shipSprite.x = 500;
    this.shipSprite.y = 500;

    this.container.addChild(this.shipSprite);

    this.app.stage.addChild(this.container);
  };

  @HostListener('document:keydown', ['$event'])
  onKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'KeyW') {
      this.shipSprite.y -= 5;
    }
  };
}