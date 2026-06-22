const ecommerce = {
    pid: 'W01',
    pname: 'Titan Watch',
    price: 45,
    Availibility: {
        online: ['Flipkart', 'Amazon']
    },

    configuration: {
        Bluetooth: 'Yes',
        Wifi: 'Yes',
        Alarm: 'Yes',
        Timer: 'Yes',
        country: 'India',
        favColors: ['Red', 'Black'],

        loc: {
        lat: 61.2039,
        long: 34.2019,
    },
    },    
};


// shallow clone - country, long and timer

/*

const shallowClone = {...ecommerce};

shallowClone.configuration.country = 'Australia';
shallowClone.configuration.loc.lat = 39.55;
shallowClone.configuration.Timer = 'No';

console.log(ecommerce.configuration.country);
console.log(ecommerce.configuration.loc.lat);
console.log(ecommerce.configuration.Timer);

*/



// Deep clone - country, long and timer

// /*

const deepClone = JSON.parse(JSON.stringify(ecommerce));

deepClone.configuration.country = 'Australia';
deepClone.configuration.loc.lat = 39.55;
deepClone.configuration.Timer = 'No';

console.log(ecommerce.configuration.country);
console.log(ecommerce.configuration.loc.lat);
console.log(ecommerce.configuration.Timer);

console.log(deepClone.configuration.country);
console.log(deepClone.configuration.loc.lat);
console.log(deepClone.configuration.Timer);

// */