(function (angular) {
    'use strict';

    function Individual(name, email, profileUrl) {
        this.name = name || null;
        this.email = email || null;
        this.profileUrl = profileUrl || null;
    }

    function GpsLocation(lat, lng) {
        this.lat = lat || 0;
        this.lng = lng || 0;
    }
    GpsLocation.unknown = new GpsLocation();

    function Place(name, address, details, websiteUrl, location) {
        this.name = name || null;
        this.address = address || null;
        this.details = details || null;
        this.websiteUrl = websiteUrl || null;
        this.location = location || GpsLocation.unknown;
    }
    Place.unknown = new Place();

    function Activity(initiator, title, startsOn, endsOn, place, description) {
        this.initiator = initiator;
        this.title = title || null;
        this.description = description || null;
        this.startsOn = startsOn;
        this.endsOn = endsOn;
        this.place = place || Place.unknown;
    }

    angular.module('hang-out').value('model', {
        Individual: Individual,
        GpsLocation: GpsLocation,
        Place: Place,
        Activity: Activity
    });

}).call(this, this.angular);