// import '@babel/polyfill';
import Stealth from './stealth';
import Commitment from './commitment';
import * as Address from './address';
import * as common from './common';
import * as Crypto from './crypto';
import UTXO from './utxo';
import Wallet from './wallet';
import toBN from 'number-to-bn';

export default {
    Stealth,
    Address,
    common,
    Crypto,
    UTXO,
    Commitment,
    Wallet,
    toBN
};
