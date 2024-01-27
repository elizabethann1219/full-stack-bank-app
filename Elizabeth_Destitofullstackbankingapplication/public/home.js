function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Welcome to Bailey Savings and Loan</h2>
          <p className="trust-text">The bank you can trust-since 1946.</p>
          <img src="bank.png" className="img-fluid" alt="Responsive image" style={{ width: '75%' }}/>
          <Link to="/login" className="btn btn-success" style={{ width: '35%'}}>Login</Link>
        </div>
        <div className="col">
          <img src="bailey.jpg" className="img-fluid" alt="Another Image" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}

