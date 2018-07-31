export class TimeDispatcher {
  constructor(timeout) {
    this.timeout = timeout;
  }

  dispatch(func) {
    this.func = func;
    if (this.eventId) {
      return;
    }

    this.eventId = setTimeout(
      () => {
        this.eventId = null;
        this.func();
      },
      this.timeout
    );
  }

  clear() {
    if (this.eventId) {
      clearTimeout(this.eventId);
    }
    this.eventId = null;
  }
}
