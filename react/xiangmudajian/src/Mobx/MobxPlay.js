import React from 'react'
import { counterSrore } from "./Store"
// react18以后不支持
import { observe } from 'mobx-react-lite'
function MobxPlay() {
    return (
        <div>
            <div>
                {counterSrore.count}
                <button onClick={counterSrore.addCount}>加</button>
            </div>
        </div>
    )
}

// export default observe(MobxPlay)
