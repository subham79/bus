import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren ,OnDestroy} from '@angular/core';
import { ApicallService } from './apicall.service';
import { ChildComponent } from 'src/components/child/child.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LogonService } from 'src/components/services/logon.service';
import { SubService } from 'src/components/services/sub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  AfterViewInit ,OnDestroy {

  forms : any; 
  @ViewChild('demo')children!: ElementRef;

  @ViewChild('butRef') butref!: ElementRef;

  @ViewChild(ChildComponent)
  children1!: ChildComponent;
public bookingInfo: any = {
	type: "bus",
	seats: [{
			seatNo: 1,
			status: "booked",
			category: 2,
			bookedBy: "xyz",
			gender: "",
			row: 1
		},
    {
    seatNo: 2,
status: "booked",
category: 2,
bookedBy: "xyz",
gender: "",
row: 1
},
{
seatNo: 3,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 1
},
{
seatNo: 4,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 1
},
{
seatNo: 5,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 1
},
{
seatNo: 6,
status: "available",
category: 2,
bookedBy: "vinod",
gender: "",
row: 2
},
{
seatNo: 7,
status: "booked",
category: 2,
bookedBy: "vinod",
gender: "",
row: 2
},
{
seatNo: 8,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 2
},
{
seatNo: 9,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 2
},
{
seatNo: 10,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 2
},


{
seatNo: 11,
status: "available",
category: 2,
bookedBy: "",
gender: "",
row: 3
},
{
seatNo: 12,
status: "available",
category: 2,
bookedBy: "",
gender: "",
row: 3
},
{
seatNo: 13,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 3
},
{
seatNo: 14,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 3
},
{
seatNo: 15,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 3
},



{
seatNo: 16,
status: "available",
category: 2,
bookedBy: "",
gender: "",
row: 4
},
{
seatNo: 17,
status: "available",
category: 2,
bookedBy: "",
gender: "",
row: 4
},
{
seatNo: 18,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 4
},
{
seatNo: 19,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 4
},
{
seatNo: 20,
status: "booked",
category: 3,
bookedBy: "",
gender: "",
row: 4
},

{
seatNo: 21,
status: "available",
category: 2,
bookedBy: "",
gender: "",
row: 5
},
{
seatNo: 22,
status: "booked",
category: 2,
bookedBy: "",
gender: "",
row: 5
},
{
seatNo: 23,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 5
},
{
seatNo: 24,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 5
},
{
seatNo: 25,
status: "available",
category: 3,
bookedBy: "",
gender: "",
row: 5
}



	]
};;
  public bookingForm: FormGroup | any;
  public availablseats: any[] = [];
  public flag: boolean = true;
  public error: any;
  public res: any;

  constructor(public service: ApicallService , private fb: FormBuilder, private login : LogonService , public sub: SubService) {
    this.initateForm();
  }
  alldata: any = []
  neWalldata: any = []
  Declldata: any = []
  pageaArray : any =[]
  page: any = 10
  title = 'newapp';
  test:any;
  data1:any='das'
  subham:any='das1'
  newnum : any = [1,2,3,4,5,5,3]
  newnum1: any =[]


  // @ViewChild('demo', {static: false}) demo: ElementRef;

  // @ViewChild(ChildComponent) demo : ChildComponent 
  ngOnInit(): void {
    // this.bookingInfo = mockResponse;
    this.availablseats = this.getAvailablseats();
    // let busTicketMockService = new BusTicketMockService();
    // this.res = busTicketMockService.get();
    // console.log('test')
    this.newnum.map((x:any)=>{
      this.newnum1.filter((y:any)=>{
        console.log(x,y,'oninit')
      })
    })


// this.butref.nativeElement.style.color ='red'
// this.children.nativeElement.style.color = 'red'
    // console.log(window,'shubham')
   this.sub.dataSend.subscribe((data:any)=>{
    // console.log(data,'service')
   })
    this.service.getallApi().subscribe((data: any) => {
      // console.log(data.all_data, 'service')
      this.alldata = data.all_data;

      this.neWalldata = this.alldata.map((x: any) => {
        // console.log()
        return {
          date: x.dt.slice(6, 10) + '-' + x.dt.slice(0, 2) + '-' + x.dt.slice(3, 5) ,
          sno: x.sno,
          userId: x.userId,
          callfromnumber:x.callfromnumber
        }
      })
      this.Declldata = this.neWalldata.sort((a:any,b:any )=>b.sno - a.sno)

      // console.log(this.Declldata,'Declldata')
      this.pageaArray =[]

      for (let index = 0; index <=this.page; index++) {
        this.pageaArray.push(this.Declldata[index]) 
      }
    })

    this.forms = new FormGroup({
      'name': new FormControl('')
    })
  }

  onSubmit1(){
    console.log(this.forms.value,'forms')
  }
  ngAfterViewInit():void {  
    // console.log('ViewChild1', this.children.nativeElement);
    // this.children.nativeElement.style.color = 'red'
    // console.log('ViewChildren', this.children);
  }

  onClickPage(){
    this.page = 20
    this.ngDocheck =34
    for (let index = 10; index <=this.page; index++) {
      this.pageaArray.push(this.Declldata[index])
    }
  }
  ngDocheck: any;
  ngDoCheck(){
    // console.log("DO CHECK", this.ngDocheck)
  }

  ngOnDestroy(){
    // console.log('tsrererse')
    this.service.getallApi().forEach((x:any)=>{
      x.unsubscribe()
    })
  }

  onEvent(value:any){

    console.log(value,'output call')

  }

  getData(value:any){
    console.log(value,'output123')

  }

  
  public onSubmit(formValues: FormGroup): void {
    // const userName: string = formValues.controls.v;
    const requiredSeats: number = parseInt(formValues.controls['count'].value);
    if (requiredSeats > this.availablseats.length) {
      this.error = "required seats not available";
    } else if (requiredSeats > 0) {
      // this.checkInCategorys(userName, requiredSeats);
    }

  }

  public openBookingForm(): void {
  this.bookingForm.setValue({
    name: '',
    count: ''
  });
  this.flag = true;
  this.error = '';
}

  private getAvailablseats(): any[] {
    let availablseats: any[] = []
    this.bookingInfo.seats.forEach((seat:any)=> {
      if (seat.status === 'available') {
        availablseats.push(seat);
      }
    });
    return availablseats;
  }

  private checkInCategorys(name: string, count: number): void {
    let category2: any[] = [];
    let category3: any[] = [];
    let random: any[] = [];
    if (count === 1) {
      category2 = this.checkInCategory(count, 2);
      if (category2.length !== 0) {
        this.bookSeat(category2, name);
      } else {
        category3 = this.checkInCategory(count, 3);
        if (category3.length !== 0) {
          this.bookSeat(category3, name);
        }
      }
    } else if (count === 2) {
      category2 = this.checkInCategory(count, 2);
      if (category2.length !== 0) {
        this.bookSeat(category2, name);
      } else {
        category3 = this.checkInCategory(count, 3);
        if (category3.length !== 0) {
          this.bookSeat(category3, name);
        } else {
          this.bookSeat(this.getRandomSeats(count), name);
        }

      }
    } else if(count === 3){
      category3 = this.checkInCategory(count, 3);
        if (category3.length !== 0) {
          this.bookSeat(category3, name);
        } else {
          this.bookSeat(this.getRandomSeats(count), name);
        }
    } else {
        this.bookSeat(this.getRandomSeats(count), name);
    }

  }

  private bookSeat(bookseats: any[], name: string): void {
    bookseats.forEach(seat => {
      const index: number = this.bookingInfo.seats.findIndex((data:any) => data.seatNo === seat.seatNo);
      this.bookingInfo.seats[index].status = "booked";
      this.bookingInfo.seats[index].bookedBy = name;
    });

    this.availablseats = this.getAvailablseats();

    this.flag = false;
  }

  private checkInCategory(count: number, category: number): any[] {
    let bookseats: any[] = [];
    this.availablseats.forEach(seat => {
      if (bookseats.length < count) {
        if (seat.category === category) {
          bookseats.push(seat);
        }
        if (bookseats.length === count && count > 1) {
          bookseats = this.chekIfSameRow(bookseats);
        }
      }

    });
    if (bookseats.length === count) {
      return bookseats;
    } else {
      return [];
    }
  }

  private chekIfSameRow(bookseats: any[]): any[] {
    let row: number[] = [];
    bookseats.forEach(seat => {
      row.push(seat.row);
    })
    if (Array.from(new Set(row)).length === 1) {
      return bookseats;
    } else {
      const removeIndex = bookseats.splice(-1, 1);

      return removeIndex;
    }
  }

  private getRandomSeats(count: number): any[] {
    let randomSeats: any[] = [];
    this.availablseats.forEach(seat => {
      if (randomSeats.length < count) {
        randomSeats.push(seat)
      }
    });
    return randomSeats;
  }

  private initateForm(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required]
    });
  }

}
