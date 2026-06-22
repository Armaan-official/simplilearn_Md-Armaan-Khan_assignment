class calculate {
  constructor(p, r, t) {
    this._p = p;
    this._r = r;
    this._t = t;
  }

//   creating the getter and setter methods
  get p() {
    return this._p;
  }
  set p(newP) {
    this._p = newP;
  }

  get r() {
    return this._r;
  }
  set r(newR) {
    this._r = newR;
  }

  get t() {
    return this._t;
  }
  set t(newT) {
    this._t = newT;
  }

   simpleInterest() {
    return (this._p * this._r * this._t) / 100;
  }

}

// calculating the SI
let cal = new calculate(1000, 5, 2);
console.log('Simple interest: ' + cal.simpleInterest());

// changing the time and the ROI

cal.t = 3;
cal.r = 3;

console.log('New Simple interest: ' + cal.simpleInterest());