import Head from 'next/head'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <form class="login">
      <style jsx>{`
        .login {
          marginLeft: 500;
          background-color: red;
        }
        div {
          color: blue;
          margin-top: 100px;
          
        }
      `}</style>
        <div >
          <label>
          Name:    
            <input type='text ' value="ShopOwner"  />
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
          <a href="select">Login</a>
          
          </label>
        </div>
        
      </form>
    
  )
}

