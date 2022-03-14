import { expect, server } from './setup.js';

describe('Index page', function(){
    it('GET to base url', function(done) {
        server
            .get('/')
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                if (err) throw err;
                done();
            });
    });
});

describe('Stations page', function() {
    describe('GET request', function() {
        it('GETs /stations and receives a response', function(done) {
            server
                .get('/stations')
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.stations).to.be.a('Array');
                    res.body.stations.forEach( s => {
                        expect(s).to.have.property('id');
                        expect(s).to.have.property('name');
                    });
                    done();
                });
        });
    });

    describe('POST request', function() {
        it('INSERT new data via POST', function(done) {
            const data = { name: 'Rockerfeller Center' }
            server
                .post('/stations')
                .send(data)
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('Object');
                    expect(res.body.stations).to.have.property('id');
                    expect(res.body.stations).to.have.property('name');
                    done();
                });
        });
    });
})