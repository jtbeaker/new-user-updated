import { apiCalls } from '../services/api-calls'

describe('prepping test',() => {
    const testuser = {
        username: 'jtb',
        useremail: 'tbink@gmail.com'
    };

    it('success',done => {
        const mockPromise = Promise.resolve(testuser);
        const mockFetchPromise = Promise.resolve({
            json:()=>mockPromise
        })
        global.fetch = jest.fn().mockimplementation(()=>mockFetchPromise);

        apiCalls.createNewUser('testinguser',testuser).then(result =>{
            expect(result).toEqual(testuser);
            global.fetch.mockClear();
            done();
        });
    });
});

