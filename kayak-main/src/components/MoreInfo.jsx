import React from 'react'

export default function MoreInfo({ airline }) {
  return (
    <>
      <h5>{airline.alliance === 'none' ? null : airline.alliance}</h5>
      <h5>{airline.phone}</h5>
      <h5 className="site">{airline.site}</h5>
    </>
  )
}
