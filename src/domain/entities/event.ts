export enum EventType {
  UserRegistered = 'user.registered',
  UserLoggedIn = 'user.logged-in',
  ProductPurchased = 'product.purchased',
}

export interface Event {
  type: EventType;
  payload: any;
}

export interface UserRegisteredEvent extends Event {
  payload: {
    email: string;
    username: string;
  };
}

export interface UserLoggingEvent extends Event {
  payload: {
    email: string;
    username: string;
    token: string;
  };
}
