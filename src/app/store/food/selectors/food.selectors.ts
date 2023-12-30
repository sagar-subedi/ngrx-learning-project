// src/app/store/food/selectors/food.selectors.ts

import { Food } from 'src/app/models/food.model';
import {State} from '../state/food.state';

/**
 * Basic selector - to get foods from store
 * @param {State} state
 * @returns {Food[]}
 */
export const getFoods = (state: State): Food[] => state.foods;