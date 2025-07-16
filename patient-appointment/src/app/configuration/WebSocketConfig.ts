import { RxStomp } from '@stomp/rx-stomp';

// const LOCAL_BACKEND_URL = 'ws://localhost:8080/ws';
const BACKEND_URL = 'ws://patientappointmentservice.onrender.com/ws';
export const createStompClient = () => {
  const rxStomp = new RxStomp();

  rxStomp.configure({
    brokerURL: `ws://${BACKEND_URL}/ws`,
    connectHeaders: {},
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    reconnectDelay: 5000,
    debug: (msg) => console.log(new Date(), msg),
  });

  rxStomp.activate();

  return rxStomp;
};
