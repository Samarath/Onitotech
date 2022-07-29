import './Cash_Receipt.css'

import {useState} from 'react'

import Table from '../Table/Table';

const Cash_Receipt = () => {

    const [receipts, setReceipts] = useState([]);
    const [formdata, setFormData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(e);
        const date = e.target.field1.value;
        const amount = e.target.field2.value;
        const paymentMode = e.target.field3.value;
        const remark = e.target.field4.value;
        
        const tableData = [date, amount, paymentMode, remark];
        setReceipts([...receipts, tableData]);
        console.log(receipts);
        cancelBtn();
        showTable();
    }

    const cancelBtn = () => {
        if(formdata.target !== undefined){
            formdata.target.field1.value = ''
            formdata.target.field2.value = ''
            formdata.target.field3.value = 'Cash'
            formdata.target.field4.value = ''
        }
    }

    const showTable = () => {
        // console.log('table table')
        if(receipts.length !== 0){
            return <Table data={receipts}/>
        }
        
    }

    return(
       <> 
        <div className='main-div'>

        
        <div className="form-style-2">
          <div className="form-style-2-heading">Receipt Details</div>

         <form onSubmit={handleSubmit}>

        <label htmlFor="field1">
            <span>Date <span className="required">*</span></span>
            <input type="text" className="input-field date" name="field1" placeholder='Enter Date'/>
        </label>

        <label htmlFor="field2">
            <span>Amount <span className="required">*</span></span>
            <input type="text" className="input-field full" name="field2" placeholder='Enter Amount'/>
        </label>


        <label htmlFor="field3"><span>Payment Mode</span>
            <select name="field3" className="select-field">
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>
        </label>

        <label htmlFor="field4">
            <span>Remark </span>
            <input type='text' name="field4" className="input-field full" placeholder='Enter Remark'/>
        </label>

        <label className='btn'>
            <span> </span><input type="button" value="Cancel" onClick={cancelBtn}/>
            <span> </span><input type="submit" value="Submit" />
        </label>
</form>
</div>
</div>
    {showTable()}
</>
    )
}

export default Cash_Receipt