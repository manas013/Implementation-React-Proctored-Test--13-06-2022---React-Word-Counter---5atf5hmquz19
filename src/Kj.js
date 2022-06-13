import React, { useState } from 'react'

function Kj() {
    const[charCount,setCharCount]=useState(0)
    const[wordCount,setWord]=useState(0)
    const[Limit,setLimit]=useState(50)
    const[range,setRange]=useState(16)
    const k=(e)=>{
        setCharCount(e.target.value.length)
        let h=e.target.value
        let wordArr= h.split(" ")
        let wordCont = 0
        wordArr.map((e)=>{
            if(e!='' && e!=" "){
                wordCont++
            }
        })
        setWord(wordCont)
    }

  return (
    <>

    <textarea fontSize={range} maxLength={Limit} onChange={k}></textarea>
    <div id='word-counter'>Total number of word written {wordCount}</div>
    <div id='char-counter'>Total number of character used {charCount}</div>
    <input type="number" id='char-limit-input' onChange={(e)=>setLimit(e.target.value)} value={Limit} />
    <input type={'range'} onChange={e=>setRange(e.target.value)} id='fontSize-input' value={range} min='16' max='32' />
    </>
  )
}

export default Kj