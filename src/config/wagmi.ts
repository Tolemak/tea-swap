
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  sepolia,
} from 'wagmi/chains';
import { tea } from './tea-chain';

export const config = getDefaultConfig({
  appName: 'RainbowKit text',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    sepolia,
    tea,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
