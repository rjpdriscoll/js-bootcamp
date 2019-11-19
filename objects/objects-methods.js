let restaurant = {
    name: 'Al Forno',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function (partySize) {
        this.guestCount += partySize;
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize;
    }
}

// seatParty (takes party size and adds it to guest count)
// removeParty (takes party size and removes it from guest count)

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));

