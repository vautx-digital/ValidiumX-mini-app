export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
      <iframe 
        src="/page.html" 
        style="width: 100%; height: 100vh; border: none; overflow: hidden;"
        title="Validium-X App"
      ></iframe>
    `,
      }}
    />
  )
}
