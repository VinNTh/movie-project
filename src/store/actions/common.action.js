import { START_LOADING, STOP_LOADING } from "../constants/common.const"


export const startLoadingActions = () => {
    return {
        type: START_LOADING,
    }
}

export const stopLoadingActions = () => {
    return {
        type: STOP_LOADING,
    }
}