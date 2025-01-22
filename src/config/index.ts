


import { tea } from "./tea-chain";

//For test 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9

export interface IToken {
  name: string;
  isNative: boolean;
  address: string;
  decimal: number;
}

//For Cronos
export const TOKEN_LIST = [
  { name: "$Tea", isNative: true, address: "", decimal: 18 },
  { name: "TeaDoge", isNative: false, address: "0x2bb476C9BE5e5bbB098A0563aaE233eb285D10e9", decimal: 18 }
]

export const VVS2Router = "0x145863Eb42Cf62847A6Ca784e6416C1682b1b2Ae"

export const CONTRACT_ADDRESS = "0x17B094Db1195411872a973fc1482746E6F7Ec976" //will be change
export const FACTORY = "0x3B44B2a187a7b3824131F8db5a74194D0a42Fc15";

export const nativeCoinId = 0
export const nativeCoin = TOKEN_LIST[nativeCoinId]
export const currentChain = tea;

export const fee = 0.3; // 100

export const teaConfig = {
  chainId: 93384,
  chainName: 'tea-assam',
  network: 'tea-assam',
  nativeCurrency: {
    name: 'Tea',
    symbol: '$TEA',
    decimals: 18
  },
  rpcUrls: [
    'https://assam-rpc.tea.xyz'

  ],
  blockExplorers: [
    'https://assam.tea.xyz'
  ]

}
