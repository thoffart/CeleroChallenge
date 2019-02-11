import { Cell } from './cell.model';
import { Player } from './player.model';
import { gameStatus } from '../components/utils/types/game-status';

export interface Game {
    draws?: number;
    playerTurn?: Player;
    cells?: Cell[][];
    status: gameStatus;
}
