function requestValidator(input){
    
    //Method
    if(!isMethodValid()) throw new Error("Invalid request header: Invalid Method");
    //URL
    if(!isUrlValid()) throw new Error("Invalid request header: Invalid URI");

    //Version
    if(!isVersionValid()) throw new Error("Invalid request header: Invalid Version");

    //Message
    if(!isMessageInvalid()) throw new Error("Invalid request header: Invalid Message");

    function isMethodValid(){
        const validMethodsList = ["GET", "POST", "DELETE", "CONNECT"];
        if(!input.hasOwnProperty('method')) return false;
        if(!validMethodsList.includes(input.method)) return false;
        return true;
    }

    function isUrlValid(){
        if(!input.hasOwnProperty('uri')) return false;
        let uri = input.uri;
        let regex = /^([a-zA-Z0-9\.]+|\*)$/; 
    
        if(uri.length <= 0) return false;         
        if(!regex.test(uri)) return false; 

        return true;
    }

    function isVersionValid(){
        const validVersionList = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

        if(!input.hasOwnProperty('version')) return false;
        if(!validVersionList.includes(input.version)) return false;
        return true;
    }

    function isMessageInvalid(){
        let regex = /^[^<>&'"\\]+$/;
        if(!input.hasOwnProperty('message')) return false;
        let message = input.message;
        if (message.length > 0){
            if(!regex.test(input.message)) return false; 
        }
        return true;

    }

    return input;

}

module.exports = requestValidator;