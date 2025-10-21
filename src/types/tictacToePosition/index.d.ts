export interface ITictacToePosition {
    symbol: string;
    clickPosition: () => void;
    positionIndex?: number[];
    disable: boolean
}