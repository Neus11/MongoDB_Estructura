cnx = new Mongo("localhost");
db = cnx.getDB('optica');
db.dropDatabase();

db.createCollection('glasses');
db.createCollection('customer');
db.createCollection('provider');


db.customer.insertOne( {
    name: 'Nuria', 
    post_adress: 08004,
    contact:{ 
        telf: 689483266, 
        email: 'nuria@gomail.com',
    }, 
    date: new Date(), 
    ref_client: 99
} );

db.customer.insertOne( {
    name: 'Jordi', 
    post_adress: 08001,
    contact:{
        telf: 68948327, 
        email: 'jordi@gomail.com'
    },
    date: new Date(), 
    ref_client: 98
} );

db.customer.insertOne( {
    name: 'Juan', 
    post_adress: 08014,
    contact: {
        telf: 689483268, 
        email: 'juan@gomail.com',
    },
    date: new Date(), 
    ref_client: 97
} );

db.customer.insertOne( {
    name: 'Marta', 
    post_adress: 08006,
    contact:{
        telf: 689483269, 
        email: 'marta@gomail.com'
    },
    date: new Date(), 
    ref_client: 96
} );

db.glasses.insertOne(  {
    brands: [ {brand_id: 'Rayban' } ], 
    grad_glass: 1.5, 
    munt: 6, 
    color_munt: 'blue', 
    color_glass: 'transp', 
    price: 99
} );

db.glasses.insertOne(  {
    brands: [ {brand_id: 'Gucci'} ], 
    grad_glass: 2, 
    munt: 8, 
    color_munt:'green', 
    color_glass: 'transp', 
    price: 50
} );

db.glasses.insertOne(  {
    brands: [ {brand_id: 'Armani'} ],
    grad_glass: 0, 
    munt: 7, 
    color_munt:'black', 
    color_glass: 'green', 
    price: 75
} );

db.glasses.insertOne(  {
    brands: [ {brand_id: 'Gucci'} ],
    grad_glass: 6, 
    munt: 6, 
    color_munt: 'black', 
    color_glass: 'black', 
    price: 100
} );

db.provider.insertOne( {
    name: 'Foo', 
    adress:{
        street:'Muntaner', 
        num: 1, 
        floor: 1, 
        door: 2, 
        post_code: 08001, 
        country: 'Spain'
    }, 
    contact:{
        telf: 681483266, 
        fax: 5768 , 
        nif: 9874778
    },
    brand_id: 'Gucci'
} );

db.provider.insertOne( {
    name: 'Faa', 
    adress:{
        street:'Muntaner', 
        num: 1, 
        floor: 1, 
        door: 2, 
        post_code: 08001, 
        country: 'Spain'
    }, 
    contact:{
        telf: 682483266, 
        fax: 2768, 
        nif: 6874778
    },
    brand_id: 'Rayban'
} );

db.provider.insertOne( {
    name: 'Cool', 
    adress:{
        street:'Balmes', 
        num: 1, 
        floor: 1, 
        door: 2, 
        post_code: 08001, 
        country: 'Spain'
    }, 
    contact:{
        telf: 683483266, 
        fax: 3768, 
        nif: 5874778
    },
    brand_id: 'Armani'
} );

db.provider.insertOne( {
    name: 'Awe', 
    adress:{
        street:'Aribau',
        num: 1, 
        floor: 1, 
        door: 2, 
        post_code: 08001, 
        country: 'Spain'
    }, 
    contact:{
        telf: 684483266, 
        fax: 4768, 
        nif: 4874778
    },
    brand_id: 'Rayban'
} );

