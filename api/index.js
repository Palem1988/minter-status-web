import {mainnetExplorer, testnetExplorer} from '~/api/explorer';
import {MAINNET} from "~/assets/variables";

export function getStatus(type) {
    const explorer = type === MAINNET ? mainnetExplorer : testnetExplorer;
    return explorer.get('status-page')
        .then((response) => response.data.data);
}

export function getWebSocketConnectData(type) {
    const explorer = type === MAINNET ? mainnetExplorer : testnetExplorer;
    return explorer.get('settings/get-ws-data')
        .then((response) => response.data.data);
}
