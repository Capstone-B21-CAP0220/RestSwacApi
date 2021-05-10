REST API DOC : 

**Melihat Laporan**
----
  Returns json data about all laporan.

* **URL**

    /laporan

* **Method:**

  `GET`
  
*  **URL Params**
 
   `None`

* **Data Params**

    `None`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

        "message": "Success Get All Laporan",

        "data" : []



 
* **Error Response:**

  * **Code:** 500 NOT FOUND <br />
    **Content:** 
    
        "error" : "Not found"

**Membuat Laporan**
----
  Returns json data about new laporan.

* **URL**

    /laporan

* **Method:**

  `POST`
  
*  **URL Params**
    
    `None`
   

* **Data Params**

    * **Required:** `TRUE`
 
            nama : String

            lokasi : String

            contact : Number

            deskripsi : String

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

        "message": "Success Create New laporan",

        "data" : []



 
* **Error Response:**

  * **Code:** 500 NOT FOUND <br />
    **Content:** 
    
        "error" : "Not found"
