
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  sepolia,
  cronos,
} from 'wagmi/chains';
import { defineChain } from 'viem';

const tea =
  defineChain({
    id: 93384,
    name: 'tea-assam',
    nativeCurrency: { name: 'Tea', symbol: '$TEA', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://assam-rpc.tea.xyz'],
      },
    },
    blockExplorers: {
      default: {
        name: 'TeaScan',
        url: 'https://assam.tea.xyz',
        apiUrl: 'https://assam.tea.xyz',
      },
    }
  })

export const config = getDefaultConfig({
  appName: 'RainbowKit text',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    cronos,
    tea,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
