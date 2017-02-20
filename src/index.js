// Import the express module
import express from 'express';

/* eslint max-len: [1, {"ignoreUrls": true}] */

// Create a new instance of express
const app = express();

// Set our port to server the application on
const PORT = 3001;


  const contacts = [
    {
      _id: 1,
      name: 'Dale Cooper',
      occupation: 'FBI Agent',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg'
    },
    {
      _id: 2,
      name: 'Spike Spiegel',
      occupation: 'Bounty Hunter',
      avatar: 'http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337'
    }
  ];

  // contact list
  app.get('/contacts', (request, response) => {
    return response.json(contacts);

});


app.get('/contacts', (request, response) => {
  const selectedContact = contacts.filter((contact))
  return response._id === parseInt(request.params[0], 10);
});
  return response.json(selectedContact[0]);
});




// Tell our instance of express to listen to request made on our port
app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT)
});
