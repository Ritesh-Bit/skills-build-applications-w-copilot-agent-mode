import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function formatValue(value) {
  if (value === null || value === undefined) return '-'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

export default function ResourcePage({ component, title, eyebrow, description }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchCollection(component)
      .then((items) => { if (active) { setRecords(items); setStatus('ready') } })
      .catch((requestError) => { if (active) { setError(requestError.message); setStatus('error') } })
    return () => { active = false }
  }, [component])

  const columns = records.length && typeof records[0] === 'object' ? Object.keys(records[0]) : ['message']

  return (
    <section className="resource-page">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-heading"><div><h1>{title}</h1><p className="intro">{description}</p></div><span className="record-count">{records.length} records</span></div>
      {status === 'loading' && <p className="state-message">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="state-message state-message--error">Unable to reach the API: {error}</p>}
      {status === 'ready' && (
        <div className="table-wrap">
          <table className="table resource-table"><thead><tr>{columns.map((column) => <th key={column}>{column.replaceAll('_', ' ')}</th>)}</tr></thead>
            <tbody>{records.map((record, index) => <tr key={record.id || record._id || index}>{columns.map((column) => <td key={column}>{formatValue(typeof record === 'object' ? record[column] : record)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
    </section>
  )
}