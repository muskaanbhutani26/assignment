import { TestBed, inject } from '@angular/core/testing';

import { ShipsService } from './ships.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

describe('ShipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipsService, HttpClientModule, HttpClient, HttpHandler, {provide: APP_BASE_HREF, useValue: '/'}]
    });
  });

  it('should be created', inject([ShipsService], (service: ShipsService) => {
    expect(service).toBeTruthy();
  }));
});
