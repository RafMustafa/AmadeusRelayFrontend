import { BigNumber } from "bignumber.js";

export interface TokenPair {
    tokenASymbol : string,
    tokenBSymbol : string,
    maxTokenBAmount: string,
    maxTokenAAmount: string,
    minTokenBAmount: string,
    minTokenAAmount: string
}