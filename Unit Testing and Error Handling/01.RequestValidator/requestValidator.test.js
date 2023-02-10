const {expect} = require("chai")
const requestValidator = require("./requestValidator");

describe("Main Test", function (){
    it("Should work with valid input obj", () => {
        expect(requestValidator({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          }
          )).to.deep.equals({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          }
          )
    }); 
    it("It should identify invalid method", () => {
        expect(()=> requestValidator({
            method: 'INVALID',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          
        }) ).to.throw("Invalid request header: Invalid Method")
    }); 
    it("It should identify invalid URI", () => {
        expect(() => {
            requestValidator({
                method: 'GET',
                uri: 'apt-get',
                version: 'HTTP/1.1',
                message: ''
              
            })
        }).to.throw("Invalid request header: Invalid URI")
    });
    it("Empty URI", () => {
      expect(() => {
          requestValidator({
              method: 'GET',
              uri: '',
              version: 'HTTP/1.1',
              message: ''
            
          })
      }).to.throw("Invalid request header: Invalid URI")
  });
    it("It should identify invalid Version", () => {

        expect(() => 
            requestValidator({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.3',
            message: ''
          }
          )
            ).to.throw("Invalid request header: Invalid Version")
    });
    it("It should identify Version: HTTP/0.9", () => {
        expect(requestValidator({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/0.9',
            message: ''
          }
          )).to.deep.equals({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/0.9',
            message: ''
          })
    });
    it("It should identify Version: HTTP/1.0", () => {
        expect(requestValidator({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.0',
            message: ''
          }
          )).to.deep.equals({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.0',
            message: ''
          })
    });
    it("It should identify Version: HTTP/1.1", () => {
        expect(requestValidator({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          }
          )).to.deep.equals({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          })
    });
    it("It should identify Version: HTTP/2.0", () => {
        expect(requestValidator({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/2.0',
            message: ''
          }
          )).to.deep.equals({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/2.0',
            message: ''
          })
    });
    it("It should identify valid method GET/POST/DELETE/CONNECT", () => {
        expect(requestValidator({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          }
          )).to.deep.equals({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          });

          expect(requestValidator({
            method: 'POST',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          }
          )).to.deep.equals({
            method: 'POST',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          })
          expect(requestValidator({
            method: 'DELETE',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          }
          )).to.deep.equals({
            method: 'DELETE',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          })
          expect(requestValidator({
            method: 'CONNECT',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          }
          )).to.deep.equals({
            method: 'CONNECT',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          })
    });

it("It should identify valid message", () => {
    expect(requestValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
      }
      )).to.deep.equals({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
      }
      )
});
it("It should identify invalid message", () => {
    expect(() => {requestValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: '&copy;'
      }
      )}).to.throw("Invalid request header: Invalid Message");
});

it("It should identify missing property", () => {
    expect(() => {requestValidator({
        method: 'GET',
    
        version: 'HTTP/1.1',
        message: '&copy;'
      }
      )}).to.throw("Invalid request header: Invalid URI");
});

})