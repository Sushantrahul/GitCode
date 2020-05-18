export default function Search() {
    return (
        <form>
        <h1 >Covid-19 Daily Report</h1>        

      <div class="form">
          <label>
          Select your Pharmacy:
        <select class="input">
            <option value="none" >
            Select an Option </option>
            <option value="none"  selected >
            Jamshedpur Medical Store </option>
            <option value="none"  >
            New Jai Guru Medical</option>
            <option value="none"  >
            Kalpana Medicals</option>
            <option value="none"  >
            Sanjivani Medical & X Ray</option>
            <option value="none"  >
            Health Plus Medical</option>
            <option value="none"   >
            Raza Medical Kadma</option>
        </select>
        </label>
        <label>Select Date:
        <input type="text" value="12-05-2020"/>
        </label>
        <br></br>
        <label>
        <a href="report">Select</a>
        </label>
        </div>

        </form>
  
    )
    
  }
  <style jsx>{`

  form {
    margin: 100px 1000;
    color: blueviolet
  }
  
  
  form div {
    margin: 10px 0;
    margin-left: 400px;
  }
  
  label {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: right;
    width: 400px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  
  input {
    height: 20px;
    flex: 0 0 200px;
    margin-left: 10px;
  }
}
  
  
  
  `}</style>
