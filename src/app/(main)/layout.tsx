import '../globals.css'
export const metadata = {
  title: 'Mal3ab - Home',
  description: 'Mal3ab is a platform to make booking stadiums easier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
