//manual Testing:

    function isNumber(numInput) {
        if (numInput >= 1 && numInput <= 20) {
            return true;
        }else {
            return false;
        }
    }

    function isString(strInput) {
        if (strInput.length === 5) {
            return true;
        }else {
            return false;
        }
    }

    console.log(isNumber(17));
    console.log(isNumber(15));
    console.log(isNumber(25));

    console.log(isString('Hello'));
    console.log(isString('Jello'));
    console.log(isString('Hi'));


//QUnit Testing

    QUnit.test("ok test", function(assert) {
        assert.ok(isNumber(25), 'Passed!');
        assert.ok(isNumber(17), 'Passed!');
        assert.ok(isNumber(4), 'Passed!');

        assert.ok(isString('Hello'), 'Passed!');
        assert.ok(isString('Jello'), 'Passed!');
        assert.ok(isString('Hi'), 'Passed!');

        assert.equal(isNumber(9), true, 'Passed!');

        assert.equal(isString('rawr'), 'Passed!');
    });