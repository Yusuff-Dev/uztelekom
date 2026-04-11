export default function Button({variant, children, className}) {
  if(variant === 'primary') {
    return (
      <button className={`bg-[#174880] dark:bg-[#206CE8] border border-[#174880] text-white px-4 py-2 rounded-lg hover:bg-[#0f3a6a] cursor-pointer dark:hover:border-white dark:hover:bg-white dark:hover:text-blue-900 ${className}`}>
        {children}
      </button>
    )
  } else if(variant === 'outline') {
    return (
      <button className={`cursor-pointer bg-transparent px-4 py-2 rounded border border-[#174880] dark:border-white dark:text-white ${className}`}>
        {children}
      </button>
    )
  } else {
    return (
      <button className="bg-blue-700 text-white px-4 py-2 rounded">
        {children}
      </button>
    )
  }
}
