import React from 'react'

export default function Button({ label, loadMore }) {
  return <button onClick={loadMore}>{label}</button>
}
