import { defineChain } from "viem";

export const tea =
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