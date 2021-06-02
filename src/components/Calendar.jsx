import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class Calendars extends Component {
 state = {
  events: [
   {
    start: moment('2021-06-05 14:00').toDate(),
    end: moment('2021-06-05 14:00')
     .add(20, "minutes")
     .toDate(),
    title: "Ana Garcia"
   }
  ]
 };
 onEventResize = (data) => {
  const { start, end } = data;
  this.setState((state) => {
   state.events[0].start = start;
   state.events[0].end = end;
   return { events: [...state.events] };
  });
 };
 onEventDrop = (data) => {
  console.log(data);
 };
 render() {
  return (
   <div className="Calendars">
   <DnDCalendar
    defaultDate={moment().toDate()}
    defaultView="week"
    events={this.state.events}
    localizer={localizer}
    onEventDrop={this.onEventDrop}
    onEventResize={this.onEventResize}
    resizable
    style={{ height: "100vh" }}
   />
  </div>
 );
}
}
export default Calendars;