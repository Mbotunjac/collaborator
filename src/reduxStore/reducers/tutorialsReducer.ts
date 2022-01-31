import actionTypes from '@reduxStore/actions/actionTypes';
import { tutorials } from '@components/TutorialsList/initialTutorials';

const initialState = tutorials;

const tutorialsReducer = (
    state = initialState,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case actionTypes.ADD_TUTORIAL: {
            return [...state, action.payload];
        }

        case actionTypes.REMOVE_TUTORIAL: {
            return [...state.filter((item) => item.id !== action.payload.id)];
        }

        default:
            return state;
    }
};

export default tutorialsReducer;
