import React from 'react'

function PrimaryButton({ title, backgroundColor, textColor, children, leftIcon, customStyles, onClick }: any) {
  return (
    <button onClick={onClick} className={`min-h-10 px-6 py-2 font-semibold text-sm rounded-full border border-borderBackground border-opacity-15 transition ${backgroundColor} ${textColor} ${customStyles}`}>
      {title || children}
      {
        leftIcon ? leftIcon : null
      }
    </button>
  )
}

export default PrimaryButton;