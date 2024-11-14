import { log } from "console";
import { IOrganization, IMissileInStock } from "../types/organizations";
export const defaultMissileForUser = (name: string): IMissileInStock[] => {
    const organizations: IOrganization[] = require("../dal/organizations.json");
    const organization = organizations.find(organization => organization.name === name);    
    if (!organization) {
        return [];
    }
    const missileInStock = organization.resources;
    return missileInStock;    
}
// console.log(defaultMissileForUser("IDF - North"));

export const ourForces = (name:string)=>{
    if(name.slice(0,3) === "IDF"){
        return true        
    }    
    return false
}
const nams = [
'IDF - North',
'IDF - South',
'IDF - Center',
'IDF - West Bank',
'Hezbollah',
'Hamas',
'IRGC',
'Houthis'
]