import ActionTypes from './../constants/ActionTypes';
import DisasterData from './../assets/data/DisasterData';
import _ from 'lodash';

const initialState = {
  volcano: {
    preparation: _.map(DisasterData.volcano.preparation, o => {return {selected: false, description: o}}),
    before: _.map(DisasterData.volcano.before, o => {return {selected: false, description: o}}),
    during: _.map(DisasterData.volcano.during, o => {return {selected: false, description: o}}),
    after: _.map(DisasterData.volcano.after, o => {return {selected: false, description: o}}),
  },
  tornado: {
    preparation: _.map(DisasterData.tornado.preparation, o => {return {selected: false, description: o}}),
    before: _.map(DisasterData.tornado.before, o => {return {selected: false, description: o}}),
    during: _.map(DisasterData.tornado.during, o => {return {selected: false, description: o}}),
    after: _.map(DisasterData.tornado.after, o => {return {selected: false, description: o}}),
  },
  tsunami: {
    preparation: _.map(DisasterData.tsunami.preparation, o => {return {selected: false, description: o}}),
    before: _.map(DisasterData.tsunami.before, o => {return {selected: false, description: o}}),
    during: _.map(DisasterData.tsunami.during, o => {return {selected: false, description: o}}),
    after: _.map(DisasterData.tsunami.after, o => {return {selected: false, description: o}}),
  },
  wildfire: {
    preparation: _.map(DisasterData.wildfire.preparation, o => {return {selected: false, description: o}}),
    before: _.map(DisasterData.wildfire.before, o => {return {selected: false, description: o}}),
    during: _.map(DisasterData.wildfire.during, o => {return {selected: false, description: o}}),
    after: _.map(DisasterData.wildfire.after, o => {return {selected: false, description: o}}),
  },
  earthquake: {
    preparation: _.map(DisasterData.earthquake.preparation, o => {return {selected: false, description: o}}),
    before: _.map(DisasterData.earthquake.before, o => {return {selected: false, description: o}}),
    during: _.map(DisasterData.earthquake.during, o => {return {selected: false, description: o}}),
    after: _.map(DisasterData.earthquake.after, o => {return {selected: false, description: o}}),
  },
  flood: {
    preparation: _.map(DisasterData.flood.preparation, o => {return {selected: false, description: o}}),
    before: _.map(DisasterData.flood.before, o => {return {selected: false, description: o}}),
    during: _.map(DisasterData.flood.during, o => {return {selected: false, description: o}}),
    after: _.map(DisasterData.flood.after, o => {return {selected: false, description: o}}),
  },
  disasterType: null,
  warning: false,
};

export default function disasterReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ActionTypes.SELECT_PREPARATION:
            var {disasterType, index} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].preparation[index].selected = !data[disasterType].preparation[index].selected;
            return {
              ...state,
              ...data,
            };
        case ActionTypes.SELECT_BEFORE:
            var {disasterType, index} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].before[index].selected = !data[disasterType].before[index].selected;
            return {
              ...state,
              ...data,
            };
        case ActionTypes.SELECT_DURING:
            var {disasterType, index} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].during[index].selected = !data[disasterType].during[index].selected;
            return {
              ...state,
              ...data,
            };
        case ActionTypes.SELECT_AFTER:
            var {disasterType, index} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].after[index].selected = !data[disasterType].after[index].selected;
            return {
              ...state,
              ...data,
            };
        case ActionTypes.REMOVE_PREPARATION:
            var {disasterType, index} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].preparation.splice(index, 1);
            return {
              ...state,
              ...data,
            };
        case ActionTypes.REMOVE_BEFORE:
            var {disasterType, index} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].before.splice(index, 1);
            return {
              ...state,
              ...data,
            };
        case ActionTypes.REMOVE_DURING:
            var {disasterType, index} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].during.splice(index, 1);
            return {
              ...state,
              ...data,
            };
        case ActionTypes.REMOVE_AFTER:
            var {disasterType, index} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].after.splice(index, 1);
            return {
              ...state,
              ...data,
            };
        case ActionTypes.ADD_PREPARATION:
            var {disasterType, description} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].preparation.push({selected: false, description});
            return {
              ...state,
              ...data,
            };
        case ActionTypes.ADD_BEFORE:
            var {disasterType, description} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].before.push({selected: false, description});
            return {
              ...state,
              ...data,
            };
        case ActionTypes.ADD_DURING:
            var {disasterType, description} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].during.push({selected: false, description});
            return {
              ...state,
              ...data,
            };
        case ActionTypes.ADD_AFTER:
            var {disasterType, description} = action.payload;
            var data = {};
            data[disasterType] = _.cloneDeep(state[disasterType]);
            data[disasterType].after.push({selected: false, description});
            return {
              ...state,
              ...data,
            };
        case ActionTypes.SET_DISASTER_TYPE:
            var {disasterType} = action.payload;
            return {
              ...state,
              disasterType,
            };
        case ActionTypes.SET_WARNING:
            var {warning} = action.payload;
            return {
              ...state,
              warning,
            };
        default:
            return state;
    }
}
