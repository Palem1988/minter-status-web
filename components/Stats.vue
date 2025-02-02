<script>
    import {MAINNET, MAINNET_COIN_NAME, TESTNET_COIN_NAME} from "~/assets/variables";
    import {pretty, prettyRound, prettyUsd, roundUp} from "~/assets/utils";

    export default {
        filters: {
            pretty,
            prettyRound,
            prettyUsd,
            roundUp,
            roundUp2: (value) => roundUp(value, 2),
        },
        props: {
            network: {
                type: String,
                required: true,
            },
            stats: {
                type: Object,
                required: true,
            },
        },
        computed: {
            coinName() {
                return this.network === MAINNET ? MAINNET_COIN_NAME : TESTNET_COIN_NAME;
            },
        },
    };
</script>

<template>
    <div class="u-grid u-grid--vertical-margin">
        <section class="u-cell">
            <div class="index-stats panel">
                <div class="u-grid">
                    <div class="u-cell u-cell--medium--1-2">
                        <div class="panel__section">
                            <div class="u-grid u-grid--vertical-margin">
                                <div class="u-cell u-cell--1-3">
                                    <div class="index-stats__name">Network</div>
                                    <div class="index-stats__value index-stats__value--primary" :class="stats.networkStatus === 'active' ? 'index-stats__green' : 'index-stats__red'">
                                        {{ stats.networkStatus }}
                                    </div>
                                </div>
                                <div class="u-cell u-cell--1-3">
                                    <div class="index-stats__name">Explorer</div>
                                    <div class="index-stats__value index-stats__value--primary" :class="stats.explorerStatus === 'updating' ? 'index-stats__yellow' : stats.explorerStatus === 'active' ? 'index-stats__green' : 'index-stats__red'">
                                        {{ stats.explorerStatus }}
                                    </div>
                                </div>
                                <div class="u-cell u-cell--1-3">
                                    <div class="index-stats__name">Gate</div>
                                    <div class="index-stats__value index-stats__value--primary" :class="stats.gateStatus === 'active' ? 'index-stats__green' : 'index-stats__red'">
                                        {{ stats.gateStatus }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="u-cell u-cell--medium--1-2">
                        <div class="panel__section">
                            <div class="u-grid u-grid--vertical-margin">
                                <div class="u-cell u-cell--1-2">
                                    <div class="index-stats__name">Uptime</div>
                                    <div class="index-stats__value index-stats__value--primary">{{ stats.uptime | prettyUsd }}%</div>
                                </div>
                                <div class="u-cell u-cell--1-2">
                                    <div class="index-stats__name">Total Emission</div>
                                    <div class="index-stats__value index-stats__value--primary">
                                        <span class="index-stats__value-text">{{ stats.bipEmission | prettyRound }}</span>
                                        <span class="index-stats__sub-value">{{ coinName }}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </section>
        <section class="u-cell">
            <div class="panel">
                <div class="panel__section panel__header">
                    <h2 class="panel__header-title panel__title">
                        <img class="panel__header-title-icon" src="/img/icon-coin.svg" width="40" height="40" alt="" role="presentation">
                        Coins
                    </h2>
                </div>
                <div class="panel__section panel__section--wide">
                    <div class="u-grid">
                        <div class="u-cell u-cell--medium--1-2">
                            <div class="panel__section">
                                <div class="u-grid u-grid--vertical-margin">
                                    <div class="u-cell u-cell--1-2">
                                        <div class="index-stats__name">Free Float</div>
                                        <div class="index-stats__value index-stats__value--primary">
                                            <span class="index-stats__value-text">{{ stats.freeFloatBip | prettyRound }}</span>
                                            <span class="index-stats__sub-value">{{ coinName }}</span>
                                        </div>
                                    </div>
                                    <div class="u-cell u-cell--1-2">
                                        <div class="index-stats__name">Total Delegated</div>
                                        <div class="index-stats__value index-stats__value--primary">
                                            <span class="index-stats__value-text">{{ stats.totalDelegatedBip | prettyRound }}</span>
                                            <span class="index-stats__sub-value">{{ coinName }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="u-cell u-cell--medium--1-2">
                            <div class="panel__section">
                                <div class="u-grid u-grid--vertical-margin">
                                    <div class="u-cell u-cell--1-2">
                                        <div class="index-stats__name">Custom Coins Created</div>
                                        <div class="index-stats__value index-stats__value--primary">{{ stats.customCoinsCount | prettyRound }}</div>
                                    </div>
                                    <div class="u-cell u-cell--1-2">
                                        <div class="index-stats__name">Custom Coins Cap</div>
                                        <div class="index-stats__value index-stats__value--primary">

                                            <div class="index-stats__value index-stats__value--primary">
                                                <span class="index-stats__value-text">{{ stats.customCoinsSum | prettyRound }}</span>
                                                <span class="index-stats__sub-value">{{ coinName }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="u-cell u-cell--medium--1-2">
            <div class="panel">
                <div class="panel__section panel__header">
                    <h2 class="panel__header-title panel__title">
                        <img class="panel__header-title-icon" src="/img/icon-block.svg" width="40" height="40" alt="" role="presentation">
                        Blocks
                    </h2>
                </div>
                <div class="panel__section">
                    <div class="u-grid u-grid--vertical-margin">
                        <div class="u-cell u-cell--1-2">
                            <div class="index-stats__name">Number of Blocks</div>
                            <div class="index-stats__value index-stats__value--primary">{{ stats.numberOfBlocks | prettyRound }}</div>
                        </div>
                        <div class="u-cell u-cell--1-2">
                            <div class="index-stats__name">Speed of Blocks (24h)</div>
                            <div class="index-stats__value index-stats__value--primary">{{ stats.blockSpeed24h | prettyUsd }}s</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="u-cell u-cell--medium--1-2">
            <div class="panel">
                <div class="panel__section panel__header">
                    <h2 class="panel__header-title panel__title">
                        <img class="panel__header-title-icon" src="/img/icon-transaction.svg" width="40" height="40" alt="" role="presentation">
                        Transactions
                    </h2>
                </div>
                <div class="panel__section">
                    <div class="u-grid u-grid--vertical-margin">
                        <div class="u-cell u-cell--1-2">
                            <div class="index-stats__name">24h Transactions</div>
                            <div class="index-stats__value index-stats__value--primary">{{ stats.tx24hCount | prettyRound }}</div>
                        </div>
                        <div class="u-cell u-cell--1-2">
                            <div class="index-stats__name">Tx per Second (24h)</div>
                            <div class="index-stats__value index-stats__value--primary">{{ stats.txPerSecond | roundUp2 | prettyUsd }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="u-cell u-cell--medium--1-2">
            <div class="panel">
                <div class="panel__section panel__header">
                    <h2 class="panel__header-title panel__title">
                        <img class="panel__header-title-icon" src="/img/icon-validator.svg" width="40" height="40" alt="" role="presentation">
                        Validators
                    </h2>
                </div>
                <div class="panel__section">
                    <div class="u-grid u-grid--vertical-margin">
                        <div class="u-cell u-cell--1-2">
                            <div class="index-stats__name">Active Validators</div>
                            <div class="index-stats__value index-stats__value--primary">{{ stats.activeValidators }}</div>
                        </div>
                        <div class="u-cell u-cell--1-2">
                            <div class="index-stats__name">Active Candidates</div>
                            <div class="index-stats__value index-stats__value--primary">{{ stats.activeCandidates }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="u-cell u-cell--medium--1-2">
            <div class="panel">
                <div class="panel__section panel__header">
                    <h2 class="panel__header-title panel__title">
                        <img class="panel__header-title-icon" src="/img/icon-commission.svg" width="40" height="40" alt="" role="presentation">
                        Commission
                    </h2>
                </div>
                <div class="panel__section">
                    <div class="u-grid u-grid--vertical-margin">
                        <div class="u-cell u-cell--1-2">
                            <div class="index-stats__name">Average per Transaction (24h)</div>
                            <div class="index-stats__value index-stats__value--primary">
                                <span class="index-stats__value-text">{{ stats.averageTxCommission | roundUp | pretty }}</span>
                                <span class="index-stats__sub-value">{{ coinName }}</span>
                            </div>
                        </div>
                        <div class="u-cell u-cell--1-2">
                            <div class="index-stats__name">24h Commission</div>
                            <div class="index-stats__value index-stats__value--primary">
                                <span class="index-stats__value-text">{{ stats.totalCommission | roundUp | pretty }}</span>
                                <span class="index-stats__sub-value">{{ coinName }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
