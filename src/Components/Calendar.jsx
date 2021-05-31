import React from 'react'
// const {google} = require('googleapis');


const CalendarList = () => {

    const gapi = window.gapi
  /* 
    Update with your own Client Id and Api key 
  */
  let CLIENT_ID = "724710394015-n3e1pme5vjho8pugq3df5v0p0ijgh3gs.apps.googleusercontent.com"
  let API_KEY = "AIzaSyCjj-gWKeHAYmx_xZq0jJ6fS2tiKNrkq74"
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  const SCOPES = "https://www.googleapis.com/auth/calendar"

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      
      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        let event = {
          'summary': 'Awesome Event!',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Really great refreshments',
          'start': {
            'dateTime': '2020-06-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2020-06-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'cecilia.sanchezlosada@gmail.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

    
        const request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': 'event',
      })

      request.execute(event => {
        console.log(event)
        window.open(event.htmlLink)
      })
    
    })
  })
}



    return (
        <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Click to add event to Google Calendar</p>
          {/* <p style={{fontSize: 18}}>Uncomment the get events code to get events</p>
          <p style={{fontSize: 18}}>Don't forget to add your Client Id and Api key</p> */}
          <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>
        </header>
      </div>
    )
}

export default CalendarList;