terminal window 1:

cd /client
npm install
npm statrt

! Dodati .env fajl u server folder
Parametri: 
ACCESS_SECRET_KEY=secret
REFRESH_SECRET_KEY=secret
DB='tvoj mongo URL'

! Add .env file in the server folder
Parameters: 
ACCESS_SECRET_KEY=secret
REFRESH_SECRET_KEY=secret
DB='your mongo URL'

terminal window 2:
cd /server
npm install
npm start