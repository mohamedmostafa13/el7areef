// import axios from "axios";
const axios = require("axios");

const version = "v1";

const baseURL = `http://localhost:3000/api/${version}/admin`;

const playgroundsURL = `${baseURL}/playgrounds`;

const ownersURL = `${baseURL}/playgroundOwners`;

const getPlaygrounds = async () => 
{

    const response = await axios.get(playgroundsURL);
    const playgrounds = response.data.data.playgrounds;
    
    const playgroundsWithOwnerName = playgrounds.map(async (playground) =>
    {
        const ownerResponse = await axios.get(`${ownersURL}/${playground.ownerId}`);
        const ownerName = ownerResponse.data.data.playgroundOwner.name;
        
        return { "name": playground.name, "address": playground.address, "city": playground.city, "pricePerHour": playground.pricePerHour, "isAvailable": playground.isAvailable, "owner": ownerName };
        
    });
    const playgroundsWithOwnerNameResolved = await Promise.all(playgroundsWithOwnerName);
    
    return playgroundsWithOwnerNameResolved;
}

const getOwners = async () =>
{
    const response = await axios.get(ownersURL);
    const owners = response.data.data.playgroundOwners;

    const ownersRefined = owners.map((owner) =>
    {
        return { "id": owner._id, "name": owner.name, "email": owner.email, "balance": owner.balance == undefined ? 0 : owner.balance, "phone": owner.phone };
    });

    console.log(ownersRefined);
    return owners;
}
getOwners();
