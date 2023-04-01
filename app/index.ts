abstract class Vehicle {
  constructor(
    private _make: string,
    private _model: string,
    private _year: number,
    private _renterName: string,
    private _rentDays: number,
    private _isRented: boolean
  ) {}

  get renterName(): string {
    return this._renterName;
  }
  set renterName(newRenterName: string) {
    this._renterName = newRenterName;
  }

  get make(): string {
    return this._make;
  }
  set make(newMake: string) {
    this._make = newMake;
  }

  get model(): string {
    return this._model;
  }
  set model(newModel: string) {
    this._model = newModel;
  }

  get year(): number {
    return this._year;
  }
  set year(newYear: number) {
    this._year = newYear;
  }

  get isRented(): boolean {
    return this._isRented;
  }

  set isRented(newIsRented: boolean) {
    this._isRented = newIsRented;
  }

  get rentDays(): number {
    return this._rentDays;
  }
  set rentDays(newRentDays: number) {
    this._rentDays = newRentDays;
  }

  abstract rentalRate(): number;

  rent() {
    if (this._isRented) {
      console.log(
        `${this._make}  ${this._model}  ${this._year} is already on rented to ${this._renterName} for ${this._rentDays} days`
      );
      console.log('');
    } else {
      this._isRented = true;
      console.log(
        `${this._make}  ${this._model}  ${this._year} now going on rent to ${this._renterName} for ${this._rentDays} days successfully...`
      );
      console.log('');
    }
  }

  return() {
    if (!this._isRented) {
      console.log(
        `${this._make}  ${this._model}  ${this._year} is not on rent, It is available for rent`
      );
      console.log('');
    } else {
      this._isRented = false;
      console.log(
        `${this._make}  ${this._model}  ${this._year} return from ${this._renterName} after ${this._rentDays} days successfully...`
      );
      console.log('');
    }
  }

  abstract showDetail(): void;

  BasicDetail(): void {
    console.log('Vehicle Information');
    console.log('----------------------');
    console.log(`Manufacturer : ${this.make}`);
    console.log(`Model : ${this.model}`);
    console.log(`Year : ${this.year}`);
    console.log(`Rent Status : ${this.isRented}`);
    console.log(`Renter Name : ${this.renterName}`);
    console.log(`Rent Days : ${this.rentDays}`);
    console.log(`Rent Amount : ${this.rentalRate()}`);
  }
}

class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    renterName: string,
    rentDays: number,
    isRented: boolean,
    private _isAutomatic: boolean
  ) {
    super(make, model, year, renterName, rentDays, isRented);
  }

  get isAutomatic() {
    return this._isAutomatic;
  }

  set isAutomatic(newIsAutomaticValue: boolean) {
    this._isAutomatic = newIsAutomaticValue;
  }

  rentalRate(): number {
    if (this._isAutomatic) {
      return 1500;
    } else {
      return 800;
    }
  }

  showDetail(): void {
    this.BasicDetail();
    console.log(`Automatic : ${this._isAutomatic}`);
    console.log('');
  }
}
class Truck extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    renterName: string,
    rentDays: number,
    isRented: boolean,
    private _size: string // feet of truck
  ) {
    super(make, model, year, renterName, rentDays, isRented);
  }

  get size() {
    return this._size;
  }

  set size(newSize: string) {
    this._size = newSize;
  }

  rentalRate(): number {
    return 2000;
  }

  showDetail(): void {
    this.BasicDetail();

    console.log(`Size : ${this._size}`);
    console.log('');
  }
}

class MotorCycle extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    renterName: string,
    rentDays: number,
    isRented: boolean,
    private _engineCc: 70 | 100 | 125 | 150 | 200 // cc of bike
  ) {
    super(make, model, year, renterName, rentDays, isRented);
  }

  get engineCc() {
    return this._engineCc;
  }

  set engineCc(newEngineCcValue: 70 | 100 | 125 | 150 | 200) {
    this._engineCc = newEngineCcValue;
  }

  rentalRate(): number {
    if (this._engineCc === 70) {
      return 150;
    } else if (this._engineCc === 100) {
      return 250;
    } else if (this._engineCc === 125) {
      return 350;
    } else if (this._engineCc === 150) {
      return 500;
    } else {
      return 700;
    }
  }

  showDetail(): void {
    this.BasicDetail();
    console.log(`Engine : ${this._engineCc}`);
    console.log('');
  }
}

const HondaCityCar = new Car('Honda', 'City', 2020, 'Mr. Ali', 10, false, true);
HondaCityCar.showDetail();
HondaCityCar.rent();
HondaCityCar.return();

const SuzukiAlto = new Car('Suzuki', 'Alto', 2019, 'Mr. Raza', 5, false, false);
SuzukiAlto.showDetail();
SuzukiAlto.rent();
SuzukiAlto.rent();
SuzukiAlto.return();
SuzukiAlto.return();

const HineTruck = new Truck(
  'Hino Dutro ',
  ' 300 Series',
  2022,
  'Mr. Iqbal',
  1,
  false,
  '40ft'
);
HineTruck.showDetail();
HineTruck.rent();
HineTruck.return();

const Honda70 = new MotorCycle(
  'Honda',
  'CD-70',
  2021,
  'Mr. Dani',
  2,
  false,
  70
);
Honda70.showDetail();
Honda70.rent();
Honda70.return();

const Honda125 = new MotorCycle(
  'Honda',
  '125',
  2023,
  'Mr. Haider',
  3,
  false,
  125
);
Honda125.showDetail();
Honda125.rent();
Honda125.return();
