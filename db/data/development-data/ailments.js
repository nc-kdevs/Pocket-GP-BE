"use strict";
exports.__esModule = true;
var Ailment = /** @class */ (function () {
    function Ailment(patient_username, ailment_id, ailment_type, ailment_name, ailment_description, date, image, prescription, treatment_plan) {
    }
    return Ailment;
}());
var ailment1 = new Ailment('billybob22', 1, 'anxiety', 'mental illness', 'exam pressure, thinks everyone is out to get him', '2018-02-1116:72:98ZT', '', 'propodamal', 'one pill in the morning');
var ailment2 = new Ailment('billybob22', 2, 'backpain', 'cronic', 'damaged nerve when doing roller hockey', '2018-02-1116:72:98ZT', 'URL', 'ibrufen', 'when ever it hurts');
var ailment3 = new Ailment('billybob22', 3, 'anxiety', 'mental illness', 'reacurring depression related to anxiety', '2018-02-1116:72:98ZT', '', 'LSD', 'before she goes to sleep');
var ailment4 = new Ailment('spike', 4, 'diabetic', 'diabeties', 'type 1', '2018-02-1116:02:08ZT', '', 'insulin', 'injection 3 times a day');
var ailment5 = new Ailment('snuffles3', 5, 'stress', 'mental illness', 'its stressful being the fanciest cat so can lose his hair, hence the hat', '2019-03-2112:20:95ZT', 'URL', 'valium', 'strictly regulated, only when necessary');
var ailment6 = new Ailment('captainGrimes', 6, 'rash', 'not diagnosed', 'appreaed after he was bitten on a night out', '2018-12-0116:15:38ZT', 'URL');
var ailment7 = new Ailment('captainGrimes', 7, 'bruising', 'not diagnosed', 'he has started to bruise very easily and they stay a long time', '2018-12-2116:12:98ZT', 'URL');
exports.ailments = [ailment1, ailment2, ailment3, ailment4, ailment5, ailment6, ailment7];
