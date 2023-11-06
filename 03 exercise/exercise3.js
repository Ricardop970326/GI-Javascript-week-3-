///Inside of a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and SSN. Only the name property should be accessible, and it should be called through a public function. The SSN property should not be accessible at all. Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.

//declare de pacient info as a const and immediately invoke a function

const pacientPII = (function() {
    let PII = {
        name: 'Ricardo Pena',
        phoneNumber: '737-318-4567',
        address: '631, Blue Oak Blvd',
        email: 'ricardop.alejandrog@gmail.com'
    };

    let private = { // create a private object inside the function
        _SSN: '000-00-0000'
    };

    return {
      getName: function() {
        return PII.name;
      },
      getPhoneNumber: function() {
        return PII.phoneNumber;
      },
      getAddress: function() {
        return PII.address;
      },
      getEmail: function() {
        return PII.email;
      },
      getSSN: function() {
        return "PRIVATE INFO";
      }
    };
})();
  
  console.log(pacientPII.getName()); 

  console.log(pacientPII.getPhoneNumber());

  console.log(pacientPII.getAddress()); 

  console.log(pacientPII.getSSN()); 
  
  console.log(pacientPII._SSN);

  console.log(pacientPII);