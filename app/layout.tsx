import './globals.css'

export const metadata = {
  title: '포켓몬 도감',
  description: 'nextjs + tailwindcss 포켓몬 도감',
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
