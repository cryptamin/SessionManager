const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

class Session {
    constructor(options) {

        // SET OPTIONS
        this.options = {
            access_token_ttl: 108000, // 30 minutes
            refresh_token_ttl: 5184000 * 7 // 7 day
        }

        if(options) {
                       
        }


        // INITIALIZE 

        this.session_id = uuidv4()

        this.access_token = {
            token: null,
            expire_date: null,
        };
        this.refresh_token = {
            token: null,
            security_key: null,
            expire_date: null
        };
        this.creator_data = {
            ip_address: null,
            username: null,
            creation_date: null,        
        };
        this.data = new String();

        // RUN INITIALIZER METHODS

        
        this.generate_refresh_token();

        this.generate_access_token();

    }

    generate_access_token() {
        this.access_token.token = crypto.randomBytes(32).toString('base64');
        this.access_token.expire_date = Date.now() + this.options.access_token_ttl; 
    }

    generate_refresh_token() {
        this.refresh_token.token = crypto.randomBytes(32).toString('base64');
        this.refresh_token.security_key = crypto.randomBytes(5).toString('base64');
        this.refresh_token.expire_date = Date.now() + this.options.refresh_token_ttl; 
    }

    validate_refresh_token(refresh_token, security_key) {
        if(refresh_token !== this.refresh_token.token)        
            return 'invalid_token';

        if(security_key !== this.refresh_token.security_key)
            return 'invalid_security_key';
        
        if(Date.now() > this.refresh_token.expire_date) 
            return 'expired_token'
            
        return true;
    }

    validate_access_token(access_token) {
        if(access_token !== this.access_token.token)        
            return 'invalid_token';

        if(Date.now() > this.access_token.expire_date) 
            return 'expired_token'
            
        return true;
    }

}

module.exports = Session;