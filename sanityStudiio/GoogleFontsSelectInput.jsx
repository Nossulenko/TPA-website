// tpa-website/sanityStudio/GoogleFontsSelectInput.js
import React, {useState, useEffect} from 'react'
import {useQuery} from 'react-query'

const GoogleFontsSelectInput = ({type, value, onChange}) => {
  const [fonts, setFonts] = useState([])

  const fetchFonts = async () => {
    const res = await fetch('http://localhost:3000/api/getGoogleFonts')
    console.log(res.json())
    return res.json()
  }

  const {data, isError} = useQuery('fonts', fetchFonts)
  console.log('fetched data', data)
  console.log('isError', isError)

  useEffect(() => {
    if (data && !isError) {
      console.log('setting fonts', data)
      setFonts(data)
    }
  }, [data, isError])

  console.log('fonts', fonts)
  return fonts.length > 0 ? (
    <div>
      <h4>Select a Font:</h4>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {fonts.map((item) => (
          <option value={item.family} key={item.family}>
            {item.family}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <p>Loading fonts...</p>
  )
}

export default GoogleFontsSelectInput
