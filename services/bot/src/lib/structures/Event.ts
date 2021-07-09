import { GatewayDispatchEvents } from 'detritus-client/lib/constants';
import { Client } from '../../typings';

interface EventOptions {
  event: GatewayDispatchEvents;
  once?: boolean;
}

export abstract class Event<E extends GatewayDispatchEvents> {
  public context: Client;
  private event: GatewayDispatchEvents;
  private once: boolean;

  constructor(context: Client, opts: EventOptions) {
    this.context = context;

    this.event = opts.event;
    this.once = opts.once ?? false;
  }
}
