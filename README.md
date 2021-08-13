# sales-scout

Discover local yard sales near you every weekend!

Sales Scout is a free and open-source web service that emails users yard sales nearby them every friday afternoon.
To sign up, all you have to do is go to the website and provide your email and zip code.
Yard Sales, Garage sales, and Estate sales around you direct to your inbox every friday. 
No account required!
No fees.
No marketing.
Just yard sales.

This is a re-writing of a past project I had in the MERN stack.
The past iteration of Sales Scout had a frontend of pure HTML, CSS, and PHP with a backend written in Python with a MySQL database.
The purpose of this project is futher my experience with modern web-app development and to put a valuable service back on the internet.

I created this service because I found it very helpful, and I hope you find it helpful too.

All yard sales found on [yardsalesearch.com](https://www.yardsalesearch.com/)

## TODO

### NodeJS Backend

- [X] write yard sale fetcher script
    - [X] grab yard sales around a certain zip and return them as html for the email
    - [X] REST API compliant
- [ ] write express backend for the react front-end
    - [ ] route to MongoDB
    - [ ] add request processing to make sure data is all good
- [ ] write mailer script
    - [ ] fetch email address and zip code from DB
    - [ ] write personalized email for each zip code
    - [ ] send personalized email to each person in zip code

### React Frontend

- [X] create functional framework for the website
- [ ] connect sign up to the DB
- [ ] make the website look nice and mobile-friendly
- [ ] little fixes
    - [ ] make the signup only allow email and zip
