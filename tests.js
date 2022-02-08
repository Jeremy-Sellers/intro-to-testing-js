// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function (){
    it("should be a defined function",function (){
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function (){
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when executed", function (){
        expect(sayHello("Jane")).toBe(("Hello, Jane!"))
    });
    it('should return the string "Hello, Alex!"when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat! when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World! when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");})
    it('should return the string "Hello, World!" when executed with an input of false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
        });
});
describe("isFive", function(){
    it('should be a defined function', function (){
        expect(typeof isFive).toBe("function")
    }
    );
    it('should return true if input equals five', function () {expect(isFive(5)).toBe(true)
    });
})
describe("isEven", function(){
    it('should be a defined function', function () {expect(typeof isEven).toBe("function")
    });
    it('should return a boolean', function () {expect(typeof isEven()).toBe( "boolean")
    });
    it('should return true when passed 2', function () {expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed 3', function () {expect(isEven(3)).toBe(false)
    });
    it('should return false when passed "banana" ', function () {expect(isEven("banana")).toBe(false)
    });
    it('should return true when passed "8" ', function () {expect(isEven("8")).toBe(true);
    });
    it('should return false when called with infinity', function () {expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when passed true or false', function () {expect(isEven(typeof "boolean")).toBe(false)
    });
    it('should return false when not given an argument', function () {expect(isEven()).toBe(false)
    });
});

describe("isVowel", function(){
    it('should return a boolean', function () {expect(typeof isVowel()).toBe( "boolean")
    });
    it('should return true when passed "a" ', function () {expect(isVowel("a")).toBe(true)
    });
    it('should return true when passed "A" ', function () {expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y" ', function () {expect(isVowel("y")).toBe(false)
    });
    it('should return false when passed the number 4', function () {expect(isVowel(4)).toBe(false)
    });
    it('should return false when passed a boolean value', function () {expect(isVowel(typeof "boolean")).toBe(false)
    });
    it('should return false when passed "banana" ', function () {expect(isVowel("banana")).toBe(false)
    });
    it('should return false when passed nothing', function () {expect(isVowel()).toBe(false)
    });
})
describe("toAdd",function (){
    it('should return 5 when passed 2 and 3', function () {expect(toAdd(2,3)).toBe(5)
    });
    it('should return -12 when passed -3 and -9', function () {expect(toAdd(-3,-9)).toBe(-12)
    });
    it('should return 11 when passed "5" and 6', function () {expect(toAdd("5", 6)).toBe(11)
    });
    it('should return 6 when passed "-4" and "10" ', function () {expect(toAdd("-4", "10")).toBe(6)
    });
    it('should return NaN when passed "banana" and "split" ', function () {expect(toAdd("banana", "split")).toBeNaN()
    });
    it('should return NaN when passed 2 and "apples" ', function () {expect(toAdd(2, "apples")).toBeNaN()
    });
    it('should return NaN when not passed any input', function () {expect(toAdd()).toBeNaN()
    });
})