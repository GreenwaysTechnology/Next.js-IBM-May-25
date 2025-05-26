
export default function RootLayout(props){
  return <html lang="en">
      <body>
         {/* You must insert page */}
         {props.children}
      </body>
  </html>
}

{/* <RootLayout>
   <Page/>
</RootLayout> */}