import Head from 'next/head'
import Link from 'next/link'


export default function Home({ allPostsData }) {
  return (
    <html>
      <body>
      <div class="container">  
        <div >
          <label>
          User Name:    
            <input type='text ' value="ShopOwner@gmail.com"  />
          </label>
        </div>
        <div>
          <label>
          Password:
            <input type='text' value="**********"  />
          </label>
        </div>
        <div>
        <label>

            <a href="report">Login</a>
        </label>

        </div>
    </div>    
    </body>
    </html>
  )
}

<style jsx>{`

.container {
  height: 200px;
  position: relative;
  border: 3px solid green;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
`}</style>
