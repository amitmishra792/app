export class FlightInfo {
    constructor(public flightId: string,
         public flightName: string, public flightNumber: string,
          public source: string, public destination: string,
           public price: string, public departDate: string) {
    }
}
