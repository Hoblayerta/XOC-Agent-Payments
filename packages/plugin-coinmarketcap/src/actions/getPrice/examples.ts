import { ActionExample } from "@elizaos/core";

export const priceExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the current price of Bitcoin?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me check the current Bitcoin price for you.",
                action: "GET_PRICE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "The current price of BTC is 65,432.21 USD",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Check ETH price in EUR",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the current Ethereum price in EUR.",
                action: "GET_PRICE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "The current price of ETH is 2,345.67 EUR",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Explícame el mecanismo de consenso de Solana",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Te explico sobre el Proof of History (PoH) de Solana y su integración con PoS.",
                action: "TECHNICAL_EXPLANATION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Solana utiliza PoH como una fuente de tiempo descentralizada, combinada con PoS:\n\n1. PoH crea un registro histórico verificable\n2. Reduce la latencia de consenso\n3. Permite hasta 65,000 TPS\n\n¿Te gustaría ver un diagrama técnico?",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "¿Cómo funciona un validador de Ethereum?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Te explicaré la arquitectura y funcionamiento de un validador ETH.",
                action: "TECHNICAL_EXPLANATION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Un validador ETH requiere:\n\n1. Cliente de consenso (Prysm/Lighthouse)\n2. Cliente de ejecución (Geth/Nethermind)\n3. 32 ETH en stake\n4. Configuración de redundancia\n\n¿Quieres ver la arquitectura?",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Diferencias entre UTXO y Account Model",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Analizaremos las diferencias técnicas entre ambos modelos.",
                action: "TECHNICAL_COMPARISON",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Comparativa técnica:\n\nUTXO (Bitcoin):\n- Paralelización natural\n- Sin estado global\n- Mayor privacidad\n\nAccount (Ethereum):\n- Estado global\n- Mejor para smart contracts\n- Nonces secuenciales",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Explica el protocolo Gossip en blockchain",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Te explicaré cómo funciona el protocolo Gossip en redes P2P.",
                action: "TECHNICAL_EXPLANATION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "El protocolo Gossip permite la propagación eficiente de información:\n\n1. Cada nodo comunica con peers aleatorios\n2. Información se propaga exponencialmente\n3. Resistente a fallos\n4. Bajo overhead de red",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "¿Cómo funciona un bridge cross-chain?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Te explicaré la arquitectura técnica de los bridges cross-chain.",
                action: "TECHNICAL_EXPLANATION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Arquitectura de bridge:\n\n1. Contratos en ambas chains\n2. Relayers/Oráculos\n3. Sistema de bloqueo/liberación\n4. Verificación de firmas\n\n¿Necesitas el diagrama técnico?",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Explica el proceso de sharding",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Te explicaré la arquitectura de sharding en blockchain.",
                action: "TECHNICAL_EXPLANATION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Sharding divide la red en subredes:\n\n1. Beacon Chain coordina\n2. Shard chains procesan en paralelo\n3. Cross-links validan\n4. Data availability sampling\n\n¿Quieres ver la arquitectura?",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "¿Cómo funcionan las ZK-SNARKs?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Te explicaré los componentes técnicos de ZK-SNARKs.",
                action: "TECHNICAL_EXPLANATION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "ZK-SNARKs requieren:\n\n1. Circuito aritmético\n2. Trusted setup\n3. Prover genera prueba\n4. Verifier valida\n\n¿Necesitas ver el flujo completo?",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Diferencia entre Optimistic y ZK Rollups",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Analizaremos las diferencias técnicas entre ambos tipos de rollups.",
                action: "TECHNICAL_COMPARISON",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Comparativa técnica:\n\nOptimistic:\n- Período de disputa\n- Compatible EVM\n- Mayor latencia\n\nZK:\n- Pruebas matemáticas\n- Finalidad inmediata\n- Mayor complejidad",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Explica el mecanismo de slashing",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Te explicaré cómo funciona el mecanismo de slashing en PoS.",
                action: "TECHNICAL_EXPLANATION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Slashing penaliza comportamiento malicioso:\n\n1. Doble votación\n2. Inactividad prolongada\n3. Propuestas conflictivas\n4. Pérdida de stake\n\n¿Quieres ver los detalles técnicos?",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "¿Cómo funciona el mempool?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Te explicaré la gestión técnica del mempool en blockchain.",
                action: "TECHNICAL_EXPLANATION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "El mempool gestiona transacciones pendientes:\n\n1. Validación inicial\n2. Ordenamiento por gas/fee\n3. Límites de tamaño\n4. Propagación P2P\n\n¿Necesitas más detalles?",
            },
        },
    ],
];
