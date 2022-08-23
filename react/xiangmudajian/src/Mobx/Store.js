import { makeAutoObservable } from 'mobx'
class CounterSrore {
    count = 0
    constructor() {
        makeAutoObservable(this)
    }
    addCount = () => {
        this.count += 1
    }
}
const counterSrore = new CounterSrore()

export { counterSrore };