# API Documentation

### Routes  
 
 * Authentication  
  * [Register](#register)  
	* [Register with email verification](#register-with-email-verification)
	* [Login](#login)




* Test
    * [Make a Transaction](#make-a-transaction) (new)

### Logics

[Authorization](#authorization)  
[Notification](#notification)  
[Issues](#issues) 


* # Register

    *Request*
    `POST /register`
    
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    username     | string        | Required            | length 6-30, no space
    email        | string        | Required            | your email 
    password     | string        | Required            | length 8-20, must have upper, lower case and digits, no space 
    firstname    | string        | Required            | your first name
    lastname     | string        | Required            | your last name
    linkedin      | string        | Optional| If you are willing to share your linkedin
    github       | string           | Opetional | If you are willing to share you github info
    
    *Response*
```json
    {
        "user": {
            "email": "youremail@gmail.com",
            "username": "robot101011",
            "firstname": "\"your first name\",",
            "lastname": "\"your last name\",",
            "github": "PerrySong",
            "linkedin": "Pengfei Song",
        },
        "jwttoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItNDA1b3BmNTZqb2M1NGljOSIsImVtYWlsIjoieW91cmVtYWlsQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoicm9ib3QxMDEwMTEiLCJwYXNzd29yZCI6IjEyY2NmZGQ1NjIxZGY4YmFiNzU0ZjgzZTZiYTUzMThiIiwiaWF0IjoxNTQxODk2MDk2LCJleHAiOjE1NDE5ODI0OTZ9.KKZFlGq3bosHh48Roeyab_3n-4XMMt7zWs3whwpAIGU"
    }
```

```json
    {
        "error": "Some error message"
    }
```

* # login

    *Request*
    `POST /login`
    
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    username/email | string        | Required            | your email or username
    password     | string        | Required            | your password


```json
    {
        "user": {
            "email": "youremail@gmail.com",
            "username": "robot101011",
            "firstname": "\"your first name\",",
            "lastname": "\"your last name\",",
            "github": "PerrySong",
            "linkedin": "Pengfei Song",
        },
        "jwttoken": "xxx"
    }
```

```json
    {
        "error": "Error message showing that why it didn't login successfully"
    }
```
