# SessionManager

Overview
--------
An session manager implementation that help to developing token base systems. it can also generate refresh-token, access-token, and some security checks.

The generated tokens can use to authenticate a user or a connected system and also it have an expiration time, for the access token with shorter time to live you can regenerate the access-token again by getting and validating the 'refresh token' and 'refresh security key'

Support this project!
---------------------  
This is an open-source project. Currently i'm not using this project for any personal or professional.
At this time it's not completed, but i'm spending a particular time to develop it as well your reasonable pull requests can help us to develop this project faster and better. You can also help us by finding and reporting bugs, make some suggestions to improve it or tell us what you could need from this type of project.


#Usage
---------------------  

First initialize new object from the 'SessionManager' with your desired options.

```
const options = {
  
};

const sessionManager = new SessionManager(options);

```

After that you create the instance, you can use the presented methods for creating, managing or validating created sessions.

### Creating new session
------------------------
