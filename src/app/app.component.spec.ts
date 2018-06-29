// import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   }));
// });
import {AppComponent} from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('component : AppComponent', ()=>{

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(()=>{
    component=new AppComponent();
    fixture=TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule]
    
    }).createComponent(AppComponent);
    component=fixture.componentInstance;
    de=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create an app',()=>{
    expect(component).toBeDefined();

  });
  afterEach(()=>{
    component=null;
  });
})