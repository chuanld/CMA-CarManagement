// lib/pusher-client.ts
import Pusher from "pusher-js";

let pusherClient: Pusher | null = null;

export const getPusherClient = () => {
  if (!pusherClient) {
    pusherClient = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
      forceTLS: true,
    });

    pusherClient.connection.bind("connected", () => { 
      console.log("Pusher connected (client)");
    });

    pusherClient.connection.bind("error", (err: any) => {
      console.error("Pusher connection error:", err);
    });
  }

  return pusherClient;
};
