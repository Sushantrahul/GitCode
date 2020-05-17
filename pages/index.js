import Head from 'next/head'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <form >
                <br /><br />

        <div>
          <label>
          Name:    
            <input type='text '  />
          </label>
        </div>
        <div>
          <label>
          Password:
            <input type='text'   />
          </label>
        </div>
        
        <div>
        <label>
          <a href="report">Login</a>
          
          </label>
        </div>
        
      </form>
    
  )
}

