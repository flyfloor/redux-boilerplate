import {FIND_ONE_USER} from '../common/actionType';

const findUser = id => {
    return {
        type: FIND_ONE_USER,
        id,
    }
}