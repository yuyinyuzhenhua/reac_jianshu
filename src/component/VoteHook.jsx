import React, { useState, useEffect } from 'react';

export default function VoteHook(props){
    let [state, changeNum] = useState(function int(){
        return {
            supNum: 0,
            oppNum: 0
        }
    });
    // console.log(state)

    // useEffect(() => {
    //     console.log('ok');
    // },[])

    useEffect(() => {
        return () => {
            console.log('zhe...')
            console.log(document.getElementById('title').innerText)
        }
    })

    return <section>
        <header>
            <h3 id="title">{props.title}</h3>
        </header>
        <main>
            <p>支持人数：{state.supNum} </p>
            <p>反对人数：{state.oppNum} </p>
        </main>
        <footer>
            <button onClick={ev => {
                changeNum({
                    ...state,
                    supNum: ++state.supNum
                })
            }}>支持</button>
            <button onClick={ev => {
                changeNum({
                    ...state,
                    oppNum: ++state.oppNum
                })
            }}>反对</button>
        </footer>
    </section>
}