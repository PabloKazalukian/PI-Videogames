// /* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { Videogame, conn } = require('../../src/db.js');

// const agent = session(app);
// const videogame = {
//   name: 'Super Mario Bros',
// };

// describe('Videogame routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Videogame.sync({ force: true })
//     .then(() => Videogame.create(videogame)));
//   describe('GET /videogames', () => {
//     it('should get 200', () =>
//       agent.get('/videogames').expect(200)
//     );
//   });
// });

/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame,Genre, conn } = require('../../src/db.js');

const agent = session(app);

const videoGame = {
  name: 'Pug',
  description: 'descripcion del juego',
  release_date: '2020-12-10',
  image: 'https://unaImagen.com.ar',
  rating: 2,
  platforms:'Xbox, Playstation 2',
};
const videoGame2 = {
  name: 'Perrito Malvado',
  description: 'descripcion del juego',
  rating: 2,
  platforms:'Xbox, Playstation 2',
};
const Videogamei={}

describe('Videogame ', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  describe('GET Videogames', () => {
    beforeEach(() => Videogame.sync({ force: true })
      .then(() => Videogame.create(videoGame)));
    describe(' /Videogames',()=>{
      it('should get 200', () =>{
        return agent.get('/videogames').expect(200)
      }).timeout(10000)
      it('all the Videogames should be',()=>{
        return agent.get('/videogames').expect(e => expect(e.body.length>1).equal(true))
      }).timeout(10000)
      it('the created Videogame should be added',  function() {
        return agent 
          .get('/videogames') 
          .expect((res)=> {
            return expect(res.body[res.body.length-1]).contain(videoGame); 
          });
      }).timeout(10000)
      describe(' Query name',()=>{
        it('should search by query',()=>{
          return agent
          .get('/videogames?name=pug')
          .expect(r =>{
            return expect(r.body.length>3).equal(true);
          })
        })        
      }).timeout(10000)
    })
  }).timeout(20000);

  describe(' Videogames/:idVideogame', () => {
    beforeEach(() => Videogame.sync({ force: true })
      .then(() => Videogame.create(videoGame2)));
    it('Genre is Empty',()=>{
      return agent
      .get('/Videogames/3498')
      .expect(r =>{
        return expect(r.body.name).equal('Grand Theft Auto V')
      })
    })
  }).timeout(10000);
  
}).timeout(15000);


describe('GET genre',()=>{
  beforeEach(() => Genre.sync({ force: true })
  .then(()=> Genre.create({name:1,id:1})));
  it('Genre is empty',()=>{
    return expect(Genre.length).equal(0)
  }).timeout(15000)
  describe('/Genres',()=>{
    it('should get 200',()=>{
      return agent
      .get('/genres')
      .expect(200)
    }).timeout(15000)
    it('add Genres',()=>{
      expect(Genre.length).equal(0)
      return agent
      .get('/genres')
      .expect(e => expect(e.body.length>0).equal(true))
    }).timeout(20000)
  })
});



describe('POST Videogame',()=>{
  // beforeEach(() => Videogame.sync({ force: true })
  // .then(() => Videogame.create(Videogame2)));
  
  const videogameDos = {
    name: 'Pug2',
    description: 'descripcion  juego',
    release_date: '2020-12-10',
    image: 'https://unaImagen.com.ar',
    rating: 2,
    plataforms:["Xbox", "Playstation 2"],

    genre: [4,2]
  };
  
  const VideogameError = {
    name: null,
    hdescription: 'descripcion del juego',
    release_date: '2020-12-10',
    image: 'https://unaImagen.com.ar',
    rating: 2,
    plataforms:["Xbox", "Playstation 2"],
    genre: [4,2]
  };

  const Videogamemessy={
    name: 'Perrito Malvado',
    description: 'descripcion del juego',
    release_date: '2020-12-10',
    image: 'https://unaImagen.com.ar',
    rating: 2,
    plataforms:["Xbox", "Playstation 2"],
    genre: [4,2]
  };

  beforeEach(() => Videogame.sync({ force: true })
  .then(() => Videogame.create(videoGame))
  .then(()=> agent.get('/genres')));

   it('add videogameDos x',()=>{
    return agent
    .post('/videogame')
      .send(videogameDos).expect(200)
   }).timeout(30000)

   it('add error x',()=>{
    return agent
    .post('/videogame')
      .send(VideogameError).expect(500)
      .catch(()=>{ })
   }).timeout(20000)

   it('add videogame2 and return videogame2 realease_date',()=>{
    return agent
    .post('/videogame')
      .send(videogameDos)
      .then(e => expect(e.body.release_date).equal('2020-12-10'))
   }).timeout(15000)

   it('add videogame2 and return videogame2 platforms correct',()=>{
    return agent
    .post('/videogame')
      .send(Videogamemessy)
      .then(e => expect(e.body.platforms).equal('Xbox, Playstation 2'))
   }).timeout(15000)

}).timeout(50000)
