import { log } from "console";
import { IMissilesInJson } from "../types/missile";
import missiles from "../DAL/missiles.json"

export const  FlightTimeOfMissile = (name: string): number => {
    const missile = missiles.find(missile => missile.name === name);
    if (!missile) {
        return -1;
    }
    return missile.speed;    
}
export const  timeToHit = (LaunchTime:string, name:string): number => {
    const launchTime = new Date(LaunchTime);
    const now = new Date();
    const flightTime = FlightTimeOfMissile(name);        
    const timeToHit = flightTime - (now.getTime() - launchTime.getTime())/1000;
    return timeToHit>0? Math.ceil(timeToHit) : 0;
}
