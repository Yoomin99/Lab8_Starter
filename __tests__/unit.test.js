// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('First valid phone number', () => {
    expect(functions.isPhoneNumber('949-923-1234')).toBe(true);
});
test('Second valid phone number', () => {
    expect(functions.isPhoneNumber('513-923-1234')).toBe(true);
});
test('First invalid phone number', () => {
    expect(functions.isPhoneNumber('1-23456-78')).toBe(false);
});
test('Second invalid phone number', () => {
    expect(functions.isPhoneNumber('12-39499231-234')).toBe(false);
});



test('First valid email', () => {
    expect(functions.isEmail('1234@ucsd.edu')).toBe(true);
});

test('Second valid email', () => {
    expect(functions.isEmail('1234@gmail.com')).toBe(true);
});
test('First invalid email', () => {
    expect(functions.isEmail('starbucks.com')).toBe(false);
});
test('Second invalid email', () => {
    expect(functions.isEmail('tried@.com')).toBe(false);
});



test('First valid StrongPassword', () => {
    expect(functions.isStrongPassword('Ucsd_1234')).toBe(true);
});

test('Second valid StrongPassword', () => {
    expect(functions.isStrongPassword('Cse4313_')).toBe(true);
});
test('First invalid StrongPassword', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});
test('Second invalid StrongPassword', () => {
    expect(functions.isStrongPassword('tried_!')).toBe(false);
});



test('First valid Date', () => {
    expect(functions.isDate('9/13/1999')).toBe(true);
});

test('Second valid Date', () => {
    expect(functions.isDate('12/10/2021')).toBe(true);
});
test('First invalid Date', () => {
    expect(functions.isDate('111/3/12')).toBe(false);
});
test('Second invalid Date', () => {
    expect(functions.isDate('09/13/99')).toBe(false);
});



test('First valid HexColor', () => {
    expect(functions.isHexColor('#10a')).toBe(true);
});

test('Second valid HexColor', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});
test('First invalid HexColor', () => {
    expect(functions.isHexColor('1234')).toBe(false);
});
test('Second invalid HexColor', () => {
    expect(functions.isHexColor('#1234567')).toBe(false);
});


