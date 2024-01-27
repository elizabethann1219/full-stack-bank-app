function AllData() {
    const [data, setData] = React.useState('');
  
    React.useEffect(() => {
      // Fetch user data with balances from API
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(JSON.stringify(data, null, 2)); // Store the user data 
        });
    }, []);  
  
    return (
      <Card
        bgcolor="Info"
        txtcolor="black"
        header="Bailey S&L User Data"
        title="Directory"
        body={
          <pre>{data}</pre>
        }
      />
    );
  }
  