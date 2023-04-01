"use strict";
class Vehicle {
    constructor(_make, _model, _year, _renterName, _rentDays, _isRented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._renterName = _renterName;
        this._rentDays = _rentDays;
        this._isRented = _isRented;
    }
    get renterName() {
        return this._renterName;
    }
    set renterName(newRenterName) {
        this._renterName = newRenterName;
    }
    get make() {
        return this._make;
    }
    set make(newMake) {
        this._make = newMake;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
    get year() {
        return this._year;
    }
    set year(newYear) {
        this._year = newYear;
    }
    get isRented() {
        return this._isRented;
    }
    set isRented(newIsRented) {
        this._isRented = newIsRented;
    }
    get rentDays() {
        return this._rentDays;
    }
    set rentDays(newRentDays) {
        this._rentDays = newRentDays;
    }
    rent() {
        if (this._isRented) {
            console.log(`${this._make}  ${this._model}  ${this._year} is already on rented to ${this._renterName} for ${this._rentDays} days`);
            console.log('');
        }
        else {
            this._isRented = true;
            console.log(`${this._make}  ${this._model}  ${this._year} now going on rent to ${this._renterName} for ${this._rentDays} days successfully...`);
            console.log('');
        }
    }
    return() {
        if (!this._isRented) {
            console.log(`${this._make}  ${this._model}  ${this._year} is not on rent, It is available for rent`);
            console.log('');
        }
        else {
            this._isRented = false;
            console.log(`${this._make}  ${this._model}  ${this._year} return from ${this._renterName} after ${this._rentDays} days successfully...`);
            console.log('');
        }
    }
    BasicDetail() {
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
    constructor(make, model, year, renterName, rentDays, isRented, _isAutomatic) {
        super(make, model, year, renterName, rentDays, isRented);
        this._isAutomatic = _isAutomatic;
    }
    get isAutomatic() {
        return this._isAutomatic;
    }
    set isAutomatic(newIsAutomaticValue) {
        this._isAutomatic = newIsAutomaticValue;
    }
    rentalRate() {
        if (this._isAutomatic) {
            return 1500;
        }
        else {
            return 800;
        }
    }
    showDetail() {
        this.BasicDetail();
        console.log(`Automatic : ${this._isAutomatic}`);
        console.log('');
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, renterName, rentDays, isRented, _size // feet of truck
    ) {
        super(make, model, year, renterName, rentDays, isRented);
        this._size = _size;
    }
    get size() {
        return this._size;
    }
    set size(newSize) {
        this._size = newSize;
    }
    rentalRate() {
        return 2000;
    }
    showDetail() {
        this.BasicDetail();
        console.log(`Size : ${this._size}`);
        console.log('');
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, year, renterName, rentDays, isRented, _engineCc // cc of bike
    ) {
        super(make, model, year, renterName, rentDays, isRented);
        this._engineCc = _engineCc;
    }
    get engineCc() {
        return this._engineCc;
    }
    set engineCc(newEngineCcValue) {
        this._engineCc = newEngineCcValue;
    }
    rentalRate() {
        if (this._engineCc === 70) {
            return 150;
        }
        else if (this._engineCc === 100) {
            return 250;
        }
        else if (this._engineCc === 125) {
            return 350;
        }
        else if (this._engineCc === 150) {
            return 500;
        }
        else {
            return 700;
        }
    }
    showDetail() {
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
const HineTruck = new Truck('Hino Dutro ', ' 300 Series', 2022, 'Mr. Iqbal', 1, false, '40ft');
HineTruck.showDetail();
HineTruck.rent();
HineTruck.return();
const Honda70 = new MotorCycle('Honda', 'CD-70', 2021, 'Mr. Dani', 2, false, 70);
Honda70.showDetail();
Honda70.rent();
Honda70.return();
const Honda125 = new MotorCycle('Honda', '125', 2023, 'Mr. Haider', 3, false, 125);
Honda125.showDetail();
Honda125.rent();
Honda125.return();
//# sourceMappingURL=index.js.map