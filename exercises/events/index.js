// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.eventsMap = {}; // Event to handlers map
  }

  // Register an event handler
  on(eventName, callback) {
    const eventHandlers = this.eventsMap[eventName];

    if (eventHandlers) eventHandlers.push(callback);
    else this.eventsMap[eventName] = [callback];
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const eventHandlers = this.eventsMap[eventName];

    if (eventHandlers) eventHandlers.forEach(callback => callback());
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.eventsMap[eventName] = null;
  }
}

module.exports = Events;
