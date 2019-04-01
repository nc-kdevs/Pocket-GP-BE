"use strict";
exports.__esModule = true;
var Patient = /** @class */ (function () {
    function Patient(patient_username, patient_password, first_name, surname, telephone, email, address, surgery_id, emerg_contact, general_med) {
    }
    return Patient;
}());
var patient1 = new Patient('billybob22', 'cowboy55', 'billy', 'bob', '07872630981', 'cowboybilly@gmail.com', 'the Ranch/shed Hill/chortlon/M21 7BB', 1, '01739827640', 'penicillan LSD cronic back pain headaches and anxiety');
var patient2 = new Patient('spike', 'password', 'sarah', 'applebee', '07719820081', 'spikeyGirlBrackets@outlook.com', '18 green acre drive/chapeltown/MCR/M9 2PL', 1, '01268930298', 'pregnant diabetic');
var patient3 = new Patient('snuffles3', 'password2', 'chauncey', 'von snuffles', '07987777790', 'chaunceyvonsnufflesthethird@guildwars.co.uk', '9 lions arch/divinitys reach/prestwich/M8 2CS', 1, '01268930298', 'stress valium migraines');
var patient4 = new Patient('captainGrimes', 'hilltop23', 'daryl', 'grimes', '07820371134', 'daryl-grimes@yahoo.co.uk', '13 kingdom walk/walkden/MCR/M10 7WD', 1, '01268930200', 'developing bruising and rash');
exports.patients = [patient1, patient2, patient3, patient4];
