import {INCREMENT} from './actionTypes'
import {DECREMENT} from './actionTypes'

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}