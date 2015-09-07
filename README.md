# resty


This is a very basic bare bones examples of interfacing with a REST api.
All basic CRUD functions (Create, Return, Update, Destory) are used. 
Our example lets users create a collection of book reviews.


The back-end uses [json-server](https://github.com/typicode/json-server)


To run locally:

    $ git clone https://github.com/abaldwin99/resty.git
    
    $ cd resty

    $ bower install

    $ npm install -g json-server
    
    $ json-server --watch db.json
    
    
Description of the books used in the demo data comes from wikipedia.  
Thank you to the authors of the following pages...

https://en.wikipedia.org/wiki/Nineteen_Eighty-Four

https://en.wikipedia.org/wiki/Of_Mice_and_Men

https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)
