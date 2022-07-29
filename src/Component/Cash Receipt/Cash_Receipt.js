import './Cash_Receipt.css'

const Cash_Receipt = () => {
    return(
        <div className="form-style-2">
          <div className="form-style-2-heading">Receipt Details</div>

         <form action="" method="post">

        <label htmlFor="field1">
            <span>Date <span className="required">*</span></span>
            <input type="text" className="input-field" name="field1" placeholder='Enter Date'/>
        </label>

        <label htmlFor="field2">
            <span>Amount <span className="required">*</span></span>
            <input type="text" className="input-field" name="field2" placeholder='Enter Amount'/>
        </label>


        <label htmlFor="field4"><span>Payment Mode</span>
            <select name="field4" className="select-field">
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>
        </label>

        <label htmlFor="field5">
            <span>Remark <span className="required">*</span></span>
            <input type='text' name="field5" className="input-field" placeholder='Enter Remark'/>
        </label>

<label><span> </span><input type="submit" value="Submit" /></label>
</form>
</div>
    )
}

export default Cash_Receipt