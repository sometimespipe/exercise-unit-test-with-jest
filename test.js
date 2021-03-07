// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 108,40 yen", function(){
    //import the function from app.js
    const { fromDollarToYen} = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(2)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const result = 2 * 108.40; 
    
    // this is the comparison for the unit test
    expect(result).toBe(yen);
})

test("One yen should be 0.0067 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(4)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const resultPound = 4 * 0.0067; 
    
    // this is the comparison for the unit test
    expect(resultPound).toBe(pound);
})

