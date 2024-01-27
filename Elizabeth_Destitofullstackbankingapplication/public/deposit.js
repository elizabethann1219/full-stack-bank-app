const { useState, useEffect } = React;

function Deposit() {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState('');
  
  useEffect(() => {
    const balanceInStorage = parseFloat(localStorage.getItem('balance'));
    if (!isNaN(balanceInStorage)) {
      setBalance(balanceInStorage);
    }
  }, []);

  const handleDepositChange = (event) => {
    setDepositAmount(event.target.value);
  };

  const handleDepositSubmit = (event) => {
    event.preventDefault();
    if (depositAmount !== '') {
      const amount = parseFloat(depositAmount);
      if (!isNaN(amount) && amount > 0) {
        const newBalance = balance + amount;
        setBalance(newBalance);
        setDepositAmount('');
        localStorage.setItem('balance', newBalance);
      }
    }
  };

  return (
    <div className="card custom-card" style={{ borderColor: 'green', maxWidth: '300px' }}>
      <div className="card-header">Make a deposit</div>
      <div className="card-body">
        <form onSubmit={handleDepositSubmit}>
          {/* Deposit amount input */}
          <div className="form-outline mb-4">
            <input
              type="number"
              id="depositAmount"
              className="form-control"
              value={depositAmount}
              onChange={handleDepositChange}
            />
            <label className="form-label" htmlFor="depositAmount">
              Amount
            </label>
          </div>

          {/* Deposit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Deposit
          </button>

          {/* Display balance */}
          <p>Account Balance: $ {balance.toFixed(2)}</p>
        </form>
      </div>
    </div>
  );
}