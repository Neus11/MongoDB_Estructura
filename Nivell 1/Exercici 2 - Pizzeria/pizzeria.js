cnx = new Mongo("localhost");
db = cnx.getDB('pizzeria');
db.dropDatabase();

db.createCollection('client');
db.createCollection('order');
db.createCollection('product');
db.createCollection('restaurant');
db.createCollection('employee');

db.client.insertOne( {
    name: 'Nuria',
    cognom: 'Costa', 
    post_cod: 08004,
    contact:{ 
        telf: 689483266, 
        email: 'nuria@gomail.com',
    },
    location:{
        localidad:{
            loca_id: 123,
            name: 'Lleida'
        },
        provicia: {
            prov_id: 12,  
            name: 'Lleida'
        }
    }

} );

db.client.insertOne( {
    name: 'Jose',
    cognom: 'Costa', 
    post_cod: 08007,
    contact:{ 
        telf: 689483255, 
        email: 'jose@gomail.com',
    },
    location:{
        localidad:{
            loca_id: 124,
            name: 'Barcelona'
        },
        provicia: {
            prov_id: 13,  
            name: 'Barcelones'
        }
    }
        
} );

db.client.insertOne( {
    name: 'Jordi',
    cognom: 'Osta', 
    post_cod: 08034,
    contact:{ 
        telf: 689553266, 
        email: 'jordi@gomail.com',
    },
    location:{
        localidad:{
            loca_id: 125,
            name: 'Bilbao'
        },
        provicia: {
            prov_id: 14,  
            name: 'Pais Basco'
        }
    }
        
} );

db.client.insertOne( {
    name: 'Marta',
    cognom: 'Coco', 
    post_cod: 08007,
    contact:{ 
        telf: 699483266, 
        email: 'marta@gomail.com',
    },
    location:{
        localidad:{
            loca_id: 126,
            name: 'Pozuelo'
        },
        provicia: {
            prov_id: 15,  
            name: 'Madrid'
        }
    }
        
} );

db.order.insertOne( {
    _id: 1234,
    dateTime: new Date("YYYY-mm-ddTHH:MM:ss"), 
    type: {
        takeaway: true
    },
    price: 14.5,
    producto_id: 'ABC',
    restaurant_id: 'Botiga1'
} );

db.order.insertOne( {
    _id: 1235,
    dateTime: new Date("YYYY-mm-ddTHH:MM:ss"), 
    type: {
        takeaway: false
    },
    price: 20,
    product_id: 'BCD',
    restaurant_id: 'Botiga1'
} );

db.order.insertOne( {
    _id: 1236,
    dateTime: new Date("YYYY-mm-ddTHH:MM:ss"), 
    type: {
        takeaway: false
    },
    price: 12,
    product_id: 'BAC',
    restaurant_id: 'Botiga2'
} );

db.order.insertOne( {
    _id: 1237,
    dateTime: new Date("YYYY-mm-ddTHH:MM:ss"), 
    type: {
        takeaway: true
    },
    price: 18.5,
    product_id: 'CBA',
    restaurant_id: 'Botiga2'
} );

db.product.insertOne( {
    _id: 'BCD',
    name: 'Cuatro staggioni',
    price: 8,
    type:{
        category:{
            category_id: 'PIZZVEG',
            name_categ: 'Vegetarian/Vegan'
        }
    },

} );

db.product.insertOne( {
    _id: 'CBA',
    name: 'Parmigiana',
    price: 8.5,
    type:{
        category:{
            category_id: 'BLNC',
            name_categ: 'Blanca'
        }
    },

} );

db.product.insertOne( {
    _id: 'BAC',
    name: 'Burguer Kong',
    price: 10,
    type:{
        category:{
            category_id: null,
            name_categ: null
        }
    },

} );

db.product.insertOne( {
    _id: 'ABC',
    name: 'Coca Cola',
    price: 3,
    type:{
        category:{
            category_id: null,
            pizzaName: null
        }
    },

} );

db.restaurant.insertOne( {
    _id: 'Botiga1',
    adress: {
        post_cod: 08004,
        localidad: 'Barcelona',
        province: 'Barcelones'
    },
    employee_id: 'Empleat1'
} );

db.restaurant.insertOne( {
    _id: 'Botiga2',
    adress: {
        post_cod: 08094,   
        localidad: 'Pozuelo',
        province: 'Madrid'
    },
    employee_id: 'Empleat1',
    employee_id: 'Empleat2'
} );

db.employee.insertOne( {
    _id: 'Empleat1',
    details:{
        name: 'Jorge',   
        surname: 'Pozuel',
        nif: '123455',
        telf: 678988798
    },
    type: 'Cook'
} );

db.employee.insertOne( {
    _id: 'Empleat2',
    details:{
        name: 'Juan',   
        surname: 'Zuel',
        nif: '123478',
        telf: 678988799
    },
    type: 'Rider'
} );



