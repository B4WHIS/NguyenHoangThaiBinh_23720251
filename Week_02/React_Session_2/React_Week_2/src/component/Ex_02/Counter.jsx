import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function xulyCong() {
        setCount(count + 1);
        
    }
    function xulyTru() {
        setCount(count - 1);
        
    }
    function xulyReset() {
        setCount(count - count);
        
    }
    return(
        <div>
            
            <h3>Counter App</h3>
            
            <button
            type="button"
            onClick={xulyCong}
           >+</button>

            <button
            type="button"
            onClick={xulyTru}
            >-</button>

            <button
            type="button"
            onClick={xulyReset}
            >Reset</button>
            {count}
        </div>
    )
}
export default Counter;