
const apiCalls = {
    createNewUser: createNewUsers
};

function createNewUsers(){
    return Promise.resolve(
      {
        username: 'jtb',
        useremail: 'tbink@gmail.com'
      }
    );
}

export default apiCalls;