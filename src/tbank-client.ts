import {
  Channel,
  ChannelCredentials,
  Client,
  createChannel,
  createClientFactory,
  Metadata,
  TsProtoServiceDefinition,
} from 'nice-grpc'

import { InstrumentsServiceDefinition } from './generated/instruments'
import { MarketDataServiceDefinition } from './generated/marketdata'
import { OperationsServiceDefinition } from './generated/operations'
import { OrdersServiceDefinition } from './generated/orders'
import { UsersServiceDefinition } from './generated/users'
import { apiUrl, TbankClientProps } from './defs'

export class TbankClient {
  protected readonly channel: Channel

  protected readonly metadata: Metadata

  protected readonly clients: Map<any, any> = new Map()

  constructor(props: TbankClientProps) {
    const { secret } = props

    this.channel = createChannel(apiUrl, ChannelCredentials.createSsl())
    this.metadata = new Metadata({ Authorization: `Bearer ${secret}` })
  }

  public get investments(): Client<InstrumentsServiceDefinition> {
    return this.prepareClient(InstrumentsServiceDefinition)
  }

  public get marketData(): Client<MarketDataServiceDefinition> {
    return this.prepareClient(MarketDataServiceDefinition)
  }

  public get operations(): Client<OperationsServiceDefinition> {
    return this.prepareClient(OperationsServiceDefinition)
  }

  public get orders(): Client<OrdersServiceDefinition> {
    return this.prepareClient(OrdersServiceDefinition)
  }

  public get users(): Client<UsersServiceDefinition> {
    return this.prepareClient(UsersServiceDefinition)
  }

  protected prepareClient<T extends TsProtoServiceDefinition>(definition: T): Client<T> {
    if (this.clients.has(definition)) {
      return this.clients.get(definition)
    }

    const client = createClientFactory().create(definition, this.channel, { '*': { metadata: this.metadata } })
    this.clients.set(definition, client)

    return client
  }
}
