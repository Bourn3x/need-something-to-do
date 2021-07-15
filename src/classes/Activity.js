export default class Activity {
  constructor(json) {
    var costMessage;
    const price = parseFloat(json['price'])
    if (price === 0) {
      costMessage = "Absolutely free!";
    }
    else if (price > 0 && price <= 0.2) {
      costMessage = "It'll cost you a few bucks.";
    }
    else if (price > 0.2 && price <= 0.4) {
      costMessage = "Still pretty cheap.";
    }
    else if (price > 0.4 && price <= 0.6) {
      costMessage = "Okay now it's getting slightly expensive.";
    }
    else if (price > 0.6 && price <= 0.8) {
      costMessage = "Uhh.. I think that's expensive?";
    }
    else {
      costMessage = "YO THAT'S KINDA EXPENSIVE BRUH.";
    }

    this.activity = json['activity']
    this.type = json['type']
    this.participants = json['participants']
    this.price = costMessage
    this.accessibility = json['accessibility']
  }
}
