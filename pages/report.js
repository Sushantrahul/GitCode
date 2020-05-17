import React from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
//import '../css/table.css'
//import utilStyles from '../styles/utils.module.css'

import Form from '../components/form'

const columns = [

  {
    Header: 'Serial No.',
    accessor: 'sr'
  },
  {
    Header: 'Patient Name',
    accessor: 'pname'
  },
  {
    Header: 'Phone#',
    accessor: 'phone'
  },
  {
    Header: 'Address',
    accessor: 'address'
  },
  {
    Header: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Medicine',
    accessor: 'med'
  },
  {
    Header: 'Symptoms',
    accessor: 'symptom'
  },
  {
    Header: 'Self / Doctor',
    accessor: 'docself'
  },
  {
    Header: 'Prescripton ',
    accessor: 'pres'
  }
]
const data = [
  {
    sr: '1 ',
    pname: 'Rajkumar',
    phone: '9884466208',
    address: '#123, SAKCHI MAIN ROAD, JAMSHEDPUR',
    id: '1234 4567 7890',
    med: 'ALLEGRA 180',
    symptom: 'RUNNING NOSE, COUGH',
    docself: 'SELF',
    pres: 'NA'
  },
  {
    sr: '2 ',
    pname: 'Kamlesh',
    phone: '9884466209',
    address: '#123, Adityapur MAIN ROAD, JAMSHEDPUR',
    id: '1234 4567 7890',
    med: 'ALLEGRA 180',
    symptom: 'RUNNING NOSE, COUGH',
    docself: 'SELF',
    pres: 'NA'
  },
  {
    sr: '3',
    pname: 'Suresh',
    phone: '9884466210',
    address: '#123, Bishtupur MAIN ROAD, JAMSHEDPUR',
    id: '1234 4567 7890',
    med: 'ALLEGRA 180',
    symptom: 'RUNNING NOSE, COUGH',
    docself: 'SELF',
    pres: 'NA'
  },
  {
    sr: '4 ',
    pname: 'Raju',
    phone: '9884466211',
    address: '#123, Sonari MAIN ROAD, JAMSHEDPUR',
    id: '1234 4567 7890',
    med: 'ALLEGRA 180',
    symptom: 'RUNNING NOSE, COUGH',
    docself: 'SELF',
    pres: 'NA'
  },
  {
    sr: '5 ',
    pname: 'Mahesh',
    phone: '9884466212',
    address: '#123, Kadma MAIN ROAD, JAMSHEDPUR',
    id: '1234 4567 7890',
    med: 'ALLEGRA 180',
    symptom: 'RUNNING NOSE, COUGH',
    docself: 'SELF',
    pres: 'NA'
  }
]




export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: data
    }
  }

  

  

  handleFormSubmit (data) {
    axios.post('http://localhost:8080/add-review', data)
    .then(res => {
      console.log('received by server')
    })
    .catch(error => {
      throw error
    })
  }

  render () {
    return (

      <div>
        <h1 style={{marginLeft: 500 }}>Covid-19 Daily Report</h1>
        <strong style={{marginLeft: 500 }}>Shop: </strong> Jamshedpur Medicals <strong>|</strong>
        <strong> For  Date: </strong> 
        12-May-2020 

        <Form handleFormSubmit={this.handleFormSubmit.bind(this)} />
        <link rel='stylesheet' href='/../css/form.css' />
        <link rel='stylesheet' href='/../css/table.css' />



        <ReactTable
          data={this.state.data}
          columns={columns}
          defaultPageSize={10}
        />
      </div>
    )
  }
}

