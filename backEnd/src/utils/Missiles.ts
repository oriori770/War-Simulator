import { IMissilesInJson } from "../types/missiles";

export const  FlightTimeOfMissile = (name: string): any => {
    const missiles:IMissilesInJson[] = require("../dal/missiles.json");
    const missile = missiles.find(missile => missile.name === name);
    if (!missile) {
        return -1;
    }
    return missile.speed;    
}
// console.log(FlightTimeOfMissile("Iron Dome"));///3
