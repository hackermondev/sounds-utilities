import { CommandClient } from 'detritus-client';
import { Command as C, CommandOptions } from 'detritus-client/lib/command';
import { Permissions } from 'detritus-client/lib/constants';
import { Client } from '../../typings';

export abstract class Command extends C {
  public declare commandClient: Client;
  constructor(context: CommandClient, options: CommandOptions) {
    super(context, {
      permissionsClient: [Permissions.SEND_MESSAGES, Permissions.VIEW_CHANNEL],
      ...options
    });
  }
}
