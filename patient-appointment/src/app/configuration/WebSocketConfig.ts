import { RxStomp } from '@stomp/rx-stomp';

const LOCAL_BROKER_URL = 'ws://localhost:8080/ws';
const BROKER_URL = 'wss://patientappointmentservice.onrender.com/ws';
export const createStompClient = () => {
  const rxStomp = new RxStomp();

  rxStomp.configure({
    brokerURL: LOCAL_BROKER_URL,
    connectHeaders: {},
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    reconnectDelay: 5000,
    debug: (msg) => console.log(new Date(), msg),
  });

  rxStomp.activate();

  return rxStomp;
};
