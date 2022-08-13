import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Main = () => {
  const [allTokens, setAllTokens] = useState([])
  const getAllTokens = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/v1/token')
      // console.log(result, 'FSDF')
      // return result
      setAllTokens(result.data.token)
      return allTokens
    } catch (error) {
      return error
    }
  }
  useEffect(() => {
    getAllTokens()
    // const getAllTokens = async () => {
    //   try {
    //     const result = await axios.get('http://localhost:5000/api/v1/token')
    //     // console.log(result, 'FSDF')
    //     // return result
    //     setAllTokens(result)
    //     return allTokens
    //   } catch (error) {
    //     return error
    //   }
    // }
  }, [])
  console.log(allTokens)
  // console.log(getAllTokens())
  return (
    <div
      style={{
        width: 700,
        marginInline: 'auto',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>All Tokens</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2 style={{ flex: 1 }}>Line Number</h2>
        <h2 style={{ flex: 1 }}>Purpose</h2>
        <h2 style={{ flex: 1 }}>Status</h2>
      </div>

      {allTokens.map((items, index) => {
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid #bcbcbc',
            }}
          >
            <p style={{ flex: 1 }}>{items.lineNumber}</p>
            <p style={{ flex: 1 }}>{items.purpose}</p>
            <p style={{ flex: 1 }}>{items.status}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Main
