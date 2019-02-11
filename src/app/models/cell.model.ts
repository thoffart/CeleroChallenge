import { mark } from '../components/utils/types/mark';

export interface Cell {
    marked: boolean;
    playerMark?: mark;
}
