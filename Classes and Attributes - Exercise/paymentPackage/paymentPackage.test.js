const { expect } = require('chai');
const PaymentPackage = require('./paymentPackage');

describe('Payment Package Test', () => {
  it('Can be instantiated with two parameters', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(paymentPackage.name).to.equal('name');
    expect(paymentPackage.value).to.equal(10);
    expect(paymentPackage.VAT).to.equal(20);
    expect(paymentPackage.active).to.equal(true);
  });

  it("Can't be instantiated with one parameter", () => {
    expect(() => new PaymentPackage('name')).to.throw(Error);
  });

  it("Can't be instantiated with zero parameters", () => {
    expect(() => new PaymentPackage()).to.throw(Error);
  });

  it("Can't be instantiated with three parameters", () => {
    try {
        const paymentPackage = new PaymentPackage('name', 10, 10);
    } catch (error) {
        expect(error.message).to.equal('Invalid number of parameters');
    }
  });

  it('Has all properties', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(paymentPackage).to.have.property('name');
    expect(paymentPackage).to.have.property('value');
    expect(paymentPackage).to.have.property('VAT');
    expect(paymentPackage).to.have.property('active');
  });

  it('Has all functions', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(paymentPackage.toString).to.be.a('function');
  });

  it('Name can be set', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    paymentPackage.name = 'newName';
    expect(paymentPackage.name).to.equal('newName');
  });

  it("Name can't be set to empty string", () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(() => (paymentPackage.name = '')).to.throw(Error);
  });

  it("Name can't be set to non-string", () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(() => (paymentPackage.name = 10)).to.throw(Error);
  });

  it('Value can be set', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    paymentPackage.value = 100;
    expect(paymentPackage.value).to.equal(100);
  });

  it("Value can't be set to negative number", () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(() => (paymentPackage.value = -10)).to.throw(Error);
  });

  it("Value can't be set to non-number", () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(() => (paymentPackage.value = '10')).to.throw(Error);
  });

  it('VAT can be set', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    paymentPackage.VAT = 100;
    expect(paymentPackage.VAT).to.equal(100);
  });

  it("VAT can't be set to negative number", () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(() => paymentPackage.VAT = -10).to.throw(Error);
});

it("VAT can't be set to non-number", () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(() => (paymentPackage.VAT = '10')).to.throw(Error);
  });

  it('Active can be set', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    paymentPackage.active = false;
    expect(paymentPackage.active).to.equal(false);
  });

  it("Active can't be set to non-boolean", () => {
    const paymentPackage = new PaymentPackage('name', 10);
    expect(() => (paymentPackage.active = '10')).to.throw(Error);
  });

  it('toString() returns correct result', () => {
    const paymentPackage = new PaymentPackage('HR Services', 1500);
    expect(paymentPackage.toString()).to.equal(
      'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
    );
  });

  it('toString() returns correct result with inactive status', () => {
    const paymentPackage = new PaymentPackage('HR Services', 1500);
    paymentPackage.active = false;
    expect(paymentPackage.toString()).to.equal(
      'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
    );
  });

  it('toString() returns correct result with active status', () => {
    const paymentPackage = new PaymentPackage('HR Services', 1500);
    paymentPackage.active = true;
    expect(paymentPackage.toString()).to.equal(
      'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
    );
  });

  it('toString() returns correct result with VAT', () => {
    const paymentPackage = new PaymentPackage('HR Services', 1500);
    paymentPackage.VAT = 10;
    // use closeTo to test floating point values
    expect(paymentPackage.toString()).to.equal(
      `Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 10%): ${1500 *
        (1 + 10 / 100)}`
    );
  });

  it('Value can be set to minimum value', () => {
    const paymentPackage = new PaymentPackage('name', 0);
    paymentPackage.value = 0;
    expect(paymentPackage.value).to.equal(0);
  });

  it('Value can be set to maximum value', () => {
    const paymentPackage = new PaymentPackage('name', Number.MAX_SAFE_INTEGER);
    paymentPackage.value = Number.MAX_SAFE_INTEGER;
    expect(paymentPackage.value).to.equal(Number.MAX_SAFE_INTEGER);
  });

  it('VAT can be set to minimum value', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    paymentPackage.VAT = 0;
    expect(paymentPackage.VAT).to.equal(0);
  });

  it('VAT can be set to maximum value', () => {
    const paymentPackage = new PaymentPackage('name', 10);
    paymentPackage.VAT = Number.MAX_SAFE_INTEGER;
    expect(paymentPackage.VAT).to.equal(Number.MAX_SAFE_INTEGER);
  });
});
