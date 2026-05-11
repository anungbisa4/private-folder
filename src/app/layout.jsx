import '../index.css'
import '../App.css'

export const metadata = {
  title: 'Private Folder',
  description: 'Private folder app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
