import actionTypes from '@reduxStore/actions/actionTypes';

export const addTutorail = (tutorial: any) => {
    return {
        type: actionTypes.ADD_TUTORIAL,
        payload: tutorial,
    };
};

export const removeTutorial = (id: number) => {
    return {
        type: actionTypes.REMOVE_TUTORIAL,
        payload: id,
    };
};
