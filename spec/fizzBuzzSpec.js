describe("Fizzbuzz", function() {

  it('returns 1 when passed 1', function(){

    expect(fizzbuzz(1)).toEqual(1);
  });

  it('returns fizz when passed 3', function(){

    expect(fizzbuzz(3)).toEqual('fizz');
  });

  it('returns buzz when passed 5', function(){

    expect(fizzbuzz(5)).toEqual('buzz');
  });

  it('returns buzz when passed 5', function(){

    expect(fizzbuzz(15)).toEqual('fizzbuzz');
  });

});
