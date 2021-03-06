import React from "react"

export default function ArchiveComponent({
  contest: { contestName, year, link },
}) {
  return (
    <tr className="hover:bg-teal-100 bg-white">
      {contestName ? (
        <td className="table-data font-bold">{contestName}</td>
      ) : null}

      {year ? <td className="table-data">{year}</td> : null}

      {link ? (
        <td className="table-data underline">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </td>
      ) : null}
    </tr>
  )
}
