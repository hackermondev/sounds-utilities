import { CommandClient, CommandClientOptions } from 'detritus-client';
import { BOT_TOKEN, SENTRY_DSN } from '../Config';
import Sentry from '@sentry/node';

Sentry.init({
  dsn: SENTRY_DSN
});

process.on('unhandledRejection', e => Sentry.captureException(e));

export class Client extends CommandClient {
  constructor(opts: CommandClientOptions) {
    super(BOT_TOKEN, opts);
  }

  public async run() {
    await this.addMultipleIn('commands', { subdirectories: true });
    return super.run();
  }
}
