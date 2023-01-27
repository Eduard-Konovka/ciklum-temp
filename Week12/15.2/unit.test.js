const Cities = require('./index');

let cities;

describe('Check initial cities', () => {
    beforeAll(() => {
        cities = new Cities();
    })

    afterAll(() => {
        cities = new Cities();
    })

    test('Kyiv should be inside', () => {
        expect(cities.list.has('Kyiv')).toBeTruthy();
    })

    test('List should have 2 cities', () => {
        expect(cities.list.size).toBe(2);
    })
})

describe('Remove cities', () => {
    afterAll(() => {
        cities = new Cities();
    })

    describe('Remove all cities', () => {
        beforeAll(() => {
            cities.removeCity('Kyiv');
            cities.removeCity('Lviv');
        })

        test('Kyiv should not be inside', () => {
            expect(cities.list.has('Kyiv')).toBeFalsy();
        })

        test('List should be empty', () => {
            expect(cities.list.size).toBe(0);
        })
    })
})

describe('Remove one city', () => {
    beforeEach(() => {
        cities = new Cities();
    })

    test('Kyiv should not be inside', () => {
        cities.removeCity('Kyiv');
        expect(cities.list.has('Kyiv')).toBeFalsy();
    })

    test('List should have only two cities', () => {
        expect(cities.list.size).toBe(2);
    })
})

describe('Add new cities', () => {
    beforeAll(() => {
        cities.addCity('Odessa');
        cities.addCity('Kharkiv');
    })

    test('Odessa should not be inside', () => {
        expect(cities.list.has('Odessa')).toBeTruthy();
    })

    test('Kharkiv should be inside', () => {
        expect(cities.list.has('Kharkiv')).toBeTruthy();
    })

    test('List should have 4 cities', () => {
        expect(cities.list.size).toBe(4);
    })
})