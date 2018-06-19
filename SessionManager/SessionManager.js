const Session = require('../Session/Session')

class SessionsManager {
    constructor(options) {

        var default_options = {
            auto_save: false,
            secret: '12345'
        }

        this.options = default_options;

        if( typeof options !== 'object' ) 
            return;
        
    }

    create_new_session(options) {
        var sess = new Session();
        return sess;
    }
    
    load(session_id) {
        // token is expired
        // session is expired
        // session not exist 
    }

    destroy(access_token) {

    }

    save() {
        
    }

    request_new_access_token(session) {

    }

}

module.exports = SessionsManager;
