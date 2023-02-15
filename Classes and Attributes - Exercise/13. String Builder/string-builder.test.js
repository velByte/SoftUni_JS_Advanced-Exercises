const {expect} = require('chai');

const StringBuilder = require('./string-builder.js');

describe('StringBuilder', () => {

    it("holds an characters ")

    it("Can be instantiated with a string argument", () => {
        let sb = new StringBuilder('hello');
        expect(sb.toString()).to.equal('hello');
    });
    it("Can be instantiated without a string argument", () => {
        let sb = new StringBuilder();
        expect(sb.toString()).to.equal('');
    });
    it("Can't be instantiated with a non-string argument", () => {
        expect(() => new StringBuilder(1)).to.throw(TypeError);
    });
    it("Has an function append", () => {
        let sb = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('append')).to.equal(true);
        //type of append is function
        expect(typeof sb.append).to.equal('function');
    });
    it("The function append can be called with a string argument", () => {
        let sb = new StringBuilder();
        expect(() => sb.append('hello')).to.not.throw();
    });
    it("The function append can't be called with a non-string argument", () => {
        let sb = new StringBuilder();
        expect(() => sb.append(1)).to.throw(TypeError);
    });
    it("The function append can't be called without a string argument", () => {
        let sb = new StringBuilder();
        expect(() => sb.append()).to.throw(TypeError);
    });
    it("The function append adds the passed in string to the end of the storage", () => {
        let sb = new StringBuilder('hello');
        sb.append(' world');
        expect(sb.toString()).to.equal('hello world');
        sb.append('!');
        expect(sb.toString()).to.equal('hello world!');
    });
    it("Has an function prepend", () => {
        let sb = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.equal(true);
        //type of prepend is function
        expect(typeof sb.prepend).to.equal('function');
    });
    it("The function prepend can be called with a string argument", () => {
        let sb = new StringBuilder();
        expect(() => sb.prepend('hello')).to.not.throw();
    });
    it("The function prepend can't be called with a non-string argument", () => {
        let sb = new StringBuilder();
        expect(() => sb.prepend(1)).to.throw(TypeError);
    });
    it("The function prepend can't be called without a string argument", () => {
        let sb = new StringBuilder();
        expect(() => sb.prepend()).to.throw(TypeError);
    });
    it("The function prepend adds the passed in string to the beginning of the storage", () => {
        let sb = new StringBuilder('hello');
        sb.prepend('world ');
        expect(sb.toString()).to.equal('world hello');
        sb.prepend('!');
        expect(sb.toString()).to.equal('!world hello');
    });
    it("Has an function insertAt", () => {
        let sb = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.equal(true);
        //type of insertAt is function
        expect(typeof sb.insertAt).to.equal('function');
    });
    it("The function insertAt takes two parameter, an String and an Index", () => {
        expect(StringBuilder.prototype.insertAt.length).to.equal(2);
    });
    it("insertAt(string, startIndex) converts the passed in string argument to an array and adds it at the given index if the index is valid", () => {
        let sb = new StringBuilder('hello');
        sb.insertAt(' world', 5);
        expect(sb.toString()).to.equal('hello world');
        sb.insertAt('!', 0);
        expect(sb.toString()).to.equal('!hello world');
    });
    it("insertAt(string, startIndex) throws an error if the passed in index is invalid", () => {
        let sb = new StringBuilder('hello');
        try {
            sb.insertAt(' world', 10);
        } catch (err) {
            expect(err.message).to.equal('Index was outside the bounds of the collection.');
        }
    });
    it("Has an function remove", () => {
        let sb = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('remove')).to.equal(true);
        //type of remove is function
        expect(typeof sb.remove).to.equal('function');
    });
    it("The function remove takes two parameter, an Index and a Length", () => {
        expect(StringBuilder.prototype.remove.length).to.equal(2);

    });

    it("remove(startIndex, length) removes elements from the collection", () => {
        let sb = new StringBuilder('hello');
        sb.remove(0, 1);
        expect(sb.toString()).to.equal('ello');
        sb.remove(1, 2);
        expect(sb.toString()).to.equal('eo');
    });
    it("remove(startIndex, length) throws an error if the passed in index is invalid", () => {
        let sb = new StringBuilder('hello');
        try {
            sb.remove(10, 1);
        } catch (err) {
            expect(err.message).to.equal('Index was outside the bounds of the collection.');
        }
    });
    it("has a function toString", () => {
        let sb = new StringBuilder();
        expect(StringBuilder.prototype.hasOwnProperty('toString')).to.equal(true);
        //type of toString is function
        expect(typeof sb.toString).to.equal('function');
    });
    it("toString() returns the internal array joined as a string", () => {
        let sb = new StringBuilder('hello');
        expect(sb.toString()).to.equal('hello');
    });
    it("Can append an empty string", () => {
        let sb = new StringBuilder('hello');
        sb.append('');
        expect(sb.toString()).to.equal('hello');
      });
      it("Can prepend an empty string", () => {
        let sb = new StringBuilder('hello');
        sb.prepend('');
        expect(sb.toString()).to.equal('hello');
      });
      it("Can insert an empty string at the beginning of the storage", () => {
        let sb = new StringBuilder('hello');
        sb.insertAt('', 0);
        expect(sb.toString()).to.equal('hello');
      });
      
      it("Can insert an empty string at the end of the storage", () => {
        let sb = new StringBuilder('hello');
        sb.insertAt('', 5);
        expect(sb.toString()).to.equal('hello');
      });
      
      it("Can't insert an empty string in the middle of the storage", () => {
        let sb = new StringBuilder('hello');
        sb.insertAt('', 2);
        expect(sb.toString()).to.equal('hello');
      });
      it("Can remove the entire storage", () => {
        let sb = new StringBuilder('hello');
        sb.remove(0, 5);
        expect(sb.toString()).to.equal('');
      });
      it("Can't remove more elements than the length of the storage", () => {
        let sb = new StringBuilder('hello');
        try {
          sb.remove(0, 10);
        } catch (err) {
            expect(err.message).to.equal('Index was outside the bounds of the collection.');
            }
      });
      it("Throws a TypeError if the argument is not a string (constructor)", () => {
        expect(() => new StringBuilder(1)).to.throw(TypeError, "Argument must be a string");
      });
      
      it("Throws a TypeError if the argument is not a string (append)", () => {
        let sb = new StringBuilder();
        expect(() => sb.append(1)).to.throw(TypeError, "Argument must be a string");
      });
      
      it("Throws a TypeError if the argument is not a string (prepend)", () => {
        let sb = new StringBuilder();
        expect(() => sb.prepend(1)).to.throw(TypeError, "Argument must be a string");
      });
      
      it("Throws a TypeError if the argument is not a string (insertAt)", () => {
        let sb = new StringBuilder('hello');
        expect(() => sb.insertAt(1, 2)).to.throw(TypeError, "Argument must be a string");
      });
      
      it("Throws a TypeError if the argument is not a string (remove)", () => {
        let sb = new StringBuilder('hello');
        try {
          sb.remove(0, 'a');
        } catch (err) {
            expect(err.message).to.equal('Argument must be a string');
            }
      });
      it("Has a storage property", () => {
        let sb = new StringBuilder();
        expect(sb.hasOwnProperty('_stringArray')).to.equal(true);
      });
      

});