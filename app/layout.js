export const metadata = {
  title: "Validium-X",
  description: "Powered by Trust",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
