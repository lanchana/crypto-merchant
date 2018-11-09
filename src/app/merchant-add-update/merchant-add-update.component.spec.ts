import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MerchantAddUpdateComponent} from './merchant-add-update.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MerchantService} from '../shared/services/merchant.service';
import {Subject} from 'rxjs';
import {MerchantModel} from '../shared/models/merchant.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export class MockMerchantService {

  merchantUpdate = new Subject<MerchantModel[]>();

}

describe('MerchantComponent', () => {
  let component: MerchantAddUpdateComponent;
  let fixture: ComponentFixture<MerchantAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MerchantAddUpdateComponent
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: MerchantService, useClass: MockMerchantService}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantAddUpdateComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create merchantAddUpdateComponent component', () => {
    expect(component).toBeTruthy();
  });

  describe('After calling ngOnInit', () => {
    it('should create updateForm and also it should be invalid', () => {
      expect(component.updateForm).toBeTruthy();
      expect(component.updateForm.valid).toBeFalsy();
    });
  });
});
