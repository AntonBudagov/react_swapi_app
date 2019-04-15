import React, { useState, useEffect } from "react"

// компонент высшого порядка функция которая создает компонент и обрачивает сущуствующие
const useData = (Child, getData) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const unmountHandler = () => {
    setData(null)
    setError(null)
  }

  const errorHandler = e => {
    setLoading(false)
    console.log(e)
  }

  useEffect(() => {
    setLoading(true)
    getData().then((data) => {
      setData(data)
      setLoading(false)
    }).catch(errorHandler)
    return unmountHandler
  }, [])

  return <Child data={data}/>
}

export default useData