import { PREFIX } from './Config';
import { Client } from './lib/Client';

const client = new Client({
  prefix: PREFIX,
  activateOnEdits: false,
  mentionsEnabled: false,
  useClusterClient: false,
  cache: {
    voiceStates: false,
    voiceConnections: false,
    notes: false,
    connectedAccounts: false,
    presences: false,
    interactions: false,
    messages: { expire: 60 * 60 * 1000 } // Flush cache every 1 hour.
  },
  gateway: {
    intents: 581,
    compress: true
  }
});

client.run();
