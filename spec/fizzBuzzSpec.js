describe("FizzBuzz", function() {

 var fizzBuzz;

 beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });


 describe("returns fizz when divided by 3", function() {
    it('fizz for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

 describe("returns buzz when divided by 5", function() {
    it('buzz for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });

 describe("returns fizzbuzz when divided by 3 & 5", function() {
    it('fizz for 3', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });

 describe("returns number when not divided by 3 & 5", function() {
    it('returns same number', function() {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
  });
});
