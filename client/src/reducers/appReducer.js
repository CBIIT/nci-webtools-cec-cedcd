import t from '../actionTypes'
import InitialStates from '../states'

const actions = {}

actions[t.setSpecimenCounts] = (state, action) => ({...state, counts: action.value})

const getResult = feedState => feedAction => (feedAction[feedAction.type] && feedAction[feedAction.type](feedState, feedState)) || feedState
const appReducer = (state=InitialStates.specimen.counts, action={}) => getResult(state)(action)

export default appReducer