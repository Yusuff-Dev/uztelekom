export default function Button({variant, children, className}) {
  if(variant === 'primary') {
    return (
      <button className={`bg-[#174880] text-white px-4 py-2 rounded ${className}`}>
        {children}
      </button>
    )
  } else if(variant === 'outline') {
    return (
      <button className="bg-transparent text-white px-4 py-2 rounded border-2 border-gray-500">
        {children}
      </button>
    )
  } else {
    return (
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        {children}
      </button>
    )
  }
}
