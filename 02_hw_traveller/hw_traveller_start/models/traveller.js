const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  const startLocations = this.journeys.map((location) => {
    return location.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((location) => {
    return location.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransports = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return journeysByTransports;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysMinDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return journeysMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((total, currentJourney) => {
    return total + currentJourney.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = [...new Set(this.journeys.map((journey) => {
      return journey.transport;
  }))];
  return transports;
};


module.exports = Traveller;
