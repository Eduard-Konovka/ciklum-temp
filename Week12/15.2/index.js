module.exports = class Cities {
    constructor() {
        this.list = new Set(['Kyiv', 'Lviv'])
    }

    addCity(city) {
        this.list.add(city)
    }

    removeCity(city) {
        this.list.delete(city)
    }
}