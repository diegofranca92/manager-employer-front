type TableProps = {
  title?: string
  size?: number
}

export default function Table({ title, size }: TableProps) {
  return (
    <div className='w-ful rounded-md p-4'>
      <header className='bg-slate-400 text-white text-xl'>{title}</header>
      <table
        width={size}
        className='w-full border-2 rounded-sm'>
        <thead className='p-8 border-b-2'>
          <tr>
            <th>
              <input type='checkbox' />
            </th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>John</td>
            <td>22</td>
            <td>London</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>Jane</td>
            <td>23</td>
            <td>Paris</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
