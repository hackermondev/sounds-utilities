import { CommandClient, ShardClient } from 'detritus-client';
import { Context as CContext } from 'detritus-client/lib/command';

export type Override<T, K> = Omit<T, keyof K> & K;

export type Client = Override<CommandClient, { client: ShardClient }>;
export type Context = Override<CContext, { client: ShardClient }>;
