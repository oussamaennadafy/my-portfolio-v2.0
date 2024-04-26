import React from 'react'

function NavButton({ title }: any) {
  return (
    <button className={`transition-all duration-500 py-3 px-2`}>
      <p className='font-semibold text-[#334155] text-left'>
        {
          title
        }
      </p>
    </button>
  )
}

export default NavButton