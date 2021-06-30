import CONF_API_KEY from "./config";

// Place Search API call
export const searchNearbyPlaces = async (lat, long, query) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&rankby=distance&type=${query}&key=${CONF_API_KEY}`;
    console.log(url);

    const response = await fetch(url);
    const json = await response.json();
    return makeGoodData(json.results);
  } catch (e) {
    return { msg: e.message, customError: true };
  }
};

const makeGoodData = (results) => {
  let realResults = results.map((item) => {
    return {
      name: item.name,
      place_id: item.place_id,
      photoRef: item.photos[0].photo_reference,
      latitude: results.geometry.location.lat,
      longitude: results.geometry.location.long,
    };
  });
  //return nearest 7 dests
  realResults = realResults.slice(0, 8);
  return realResults;
};

// Place Detail API Call
export const placeDetails = async (placeId) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${CONF_API_KEY}`;
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    return makeGoodPlaceData(json.result);
  } catch (e) {
    return { msg: e.message, customError: true };
  }
};

const makeGoodPlaceData = (result) => {
  const placeData = {
    status: result.business_status,
    name: result.name,
    address: result.formatted_address,
    contact1: result.formatted_phone_number,
    contact2: result.international_phone_number,
    locationURL: result.url,
  };

  return placeData;
};

// Place Photo API call

export const placePhoto = async (photoRef, width) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&photoreference=${photoRef}&key=${CONF_API_KEY}`;
    console.log(url);
    const response = await fetch(url);
    return response.url;
  } catch (e) {
    return { msg: e.message, customError: true };
  }
};

// Calculate Distance API call

export const findDistance = async (origin_lat, origin_long, dest_placeId) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?&origins=${origin_lat},${origin_long}&destinations=place_id:${dest_placeId}&key=${CONF_API_KEY}`;
    console.log(url);
    const response = await fetch(url);
    const json_data = await response.json();
    const distance = rows.elements.distance.text;
    return distance;
  } catch (e) {
    return { msg: e.message, customError: true };
  }
};
