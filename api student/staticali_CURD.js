const User = require('./user'); 
const seq = require('./config');



    seq.sync()
      .then(() => {
    console.log('Book table created successfully!');

    User.create({
        name: 'kaaaa Doe',
        clas: '10'

    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
