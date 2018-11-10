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
    public       | string        | Optional, true by defualt| If you willing to share you profile
    
    *Response*
```json
    {
        "user": {
            "email": "your email",
            "password": "your password",
            "firstname": "your first name",
            "lastname": "your last name",
            "public": "true/false",
            "administrator": "true/false",
            "createAt": "some date",
            "upedateAt": "some date"
        },
        "token": "xxx"
    }
```

```json
    {
        "error": "Some error message"
    }
```

---

* # Register with email verification

    *Request*
    `POST /verify/register`

    Parameters   | Data Type     | Required / Optional | Description 
    ------------ | ------------- | ------------------- | -----------
    username     | string        | Required            | length 6-30, no space 
    email        | string        | Required            | your email 
    password     | string        | Required            | length 8-20, must have upper, lower case and digits, no space 
    firstname    | string        | Required            | your first name 
    lastname     | string        | Required            | your last name 
    public       | string        | Optional, true by defualt| If you willing to share you profile 

    *Response*

```json
    {
        "success": "true",
        "message": "We sent a link to your email, please check your email and activate your account"
    }
```

```json
    {
        "error": "Some error message"
    }
```

---

* # login

    *Request*
    `POST /login`
    
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    email/email  | string        | Required            | your email or username
    password     | string        | Required            | your password


```json
    {
        "user": {
            "email": "your email",
            "password": "your password",
            "firstname": "your first name",
            "lastname": "your last name",
            "public": "true/false",
            "administrator": "true/false",
            "createAt": "some date",
            "upedateAt": "some date"
        },
        "token": "xxx"
    }
```

```json
    {
        "error": "Error message showing that why it didn't login successfully"
    }
```
