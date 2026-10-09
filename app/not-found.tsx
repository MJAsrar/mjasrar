export default function NotFound() {
  return <main style={{minHeight:"100vh",display:"grid",placeContent:"center",gap:24,padding:32,textAlign:"center"}}>
    <h1 style={{fontSize:96,margin:0,color:"#2d4dff"}}>404</h1>
    <p>This page doesn’t exist. Let’s get you back to the portfolio.</p>
    <a className="pill dark" href="/">Back to home</a>
  </main>
}
