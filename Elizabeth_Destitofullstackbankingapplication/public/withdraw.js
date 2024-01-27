const { useState, useEffect } = React;

function Withdraw() {
  const [balance, setBalance] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  // Load balance from localStorage on component mount
  useEffect(() => {
    const balanceInStorage = parseFloat(localStorage.getItem('balance'));
    if (!isNaN(balanceInStorage)) {
      setBalance(balanceInStorage);
    }
  }, []);

  const handleWithdrawChange = (event) => {
    setWithdrawAmount(event.target.value);
  };

  const handleWithdrawSubmit = (event) => {
    event.preventDefault();
    if (withdrawAmount !== '') {
      const amount = parseFloat(withdrawAmount);
      if (!isNaN(amount) && amount > 0 && amount <= balance) {
        const newBalance = balance - amount;
        setBalance(newBalance);
        setWithdrawAmount('');
        localStorage.setItem('balance', newBalance);
      }
    }
  };

  return (
    <div className="card custom-card" style={{ borderColor: 'green', maxWidth: '300px' }}>
      <div className="card-header">Make a withdrawal</div>
      <div className="card-body">
        <form onSubmit={handleWithdrawSubmit}>
          {/* Withdraw amount input */}
          <div className="form-outline mb-4">
            <input
              type="number"
              id="withdrawAmount"
              className="form-control"
              value={withdrawAmount}
              onChange={handleWithdrawChange}
            />
            <label className="form-label" htmlFor="withdrawAmount">
              Amount
            </label>
          </div>

          {/* Withdraw button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Withdraw
          </button>

          {/* Display balance */}
          <p>Account Balance: $ {balance.toFixed(2)}</p>
        </form>
      </div>
    </div>
  );
}