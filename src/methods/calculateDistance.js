export function mapDistance({lat1, lat2,lon1, lon2})
{

    let radFactorValue = 3.1459/180;
    let R = 6371; // km
    let distanceLat = (lat2-lat1)*radFactorValue;
    let distanceLon = (lon2-lon1)*radFactorValue;
    let a = Math.sin(distanceLat/2) * Math.sin(distanceLat/2) +
        Math.cos(lat1*radFactorValue) * Math.cos(lat2*radFactorValue) *
        Math.sin(distanceLon/2) * Math.sin(distanceLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let distance = R * c ;
    return distance;
}