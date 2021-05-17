import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExApiService } from '../ex-api.service';
import { ExchangeComponent } from './exchange.component';

describe('ExchangeComponent', () => {
  let component: ExchangeComponent;
  let fixture: ComponentFixture<ExchangeComponent>;
  let service: ExApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeComponent],
      imports: [HttpClientTestingModule],
      providers: [ExApiService, HttpClient],
    }).compileComponents();
    service = TestBed.inject(ExApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
