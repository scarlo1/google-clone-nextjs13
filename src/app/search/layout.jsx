import SearchHeader from '@/components/SearchHeader'
import './../globals.css'
export const metadata = {
  title: 'Google Clone Next js 13',
  description: 'Google clone created by Next js 13',
}

export default function SearchLayout({ children }) {
  return (
      <div>
        <SearchHeader />
        {children}
        {/* Footer */}
      </div>
  )
}
