import { Command } from '../../lib/structures/Command';
import { Client, Context } from '../../typings';

export default class PingCommand extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'ping'
    });
  }

  public async run({ message, client }: Context) {
    const ping = await client.ping();
    message.reply(`REST: **${ping.rest}ms** | Gateway: **${ping.gateway}ms**`);
  }
}
