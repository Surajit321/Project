import { RxStomp } from '@stomp/rx-stomp';

export const createStompClient = () => {
  const rxStomp = new RxStomp();

  rxStomp.configure({
    brokerURL: 'ws://localhost:8080/ws',
    connectHeaders: {},
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    reconnectDelay: 5000,
    debug: (msg) => console.log(new Date(), msg),
  });

  rxStomp.activate();

  return rxStomp;
};
