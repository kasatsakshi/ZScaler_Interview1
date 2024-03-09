import './App.css';
import { useState } from 'react';

const data =
  [{
    Quarter: "Q1",
    Revenue: 18450,
    Expense: 16500
  },
  {
    Quarter: "Q2",
    Revenue: 3430,
    Expense: 3420
  },
  {
    Quarter: "Q3",
    Revenue: 3225,
    Expense: 3100
  },
  {
    Quarter: "Q4",
    Revenue: 3500,
    Expense: 3700
  }]

const width = data.length * (50 + 30)

const Chart = ({ width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width='100%'
    height='70%'
    preserveAspectRatio='xMidYMax meet'
  ></svg>
)

function App() {
  const [profit, setProfit] = useState([])
  const calculateProfit = () => {
    data.map((entry, idx) => {
      const p = entry.Revenue - entry.Expense
      console.log(profit)
      setProfit([...profit, p])
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <h4 className='heading'>Bar Graph to Display Quarterly Profit</h4>
        <div className='grid'>
          {data.map(value => (
            <div className='block'>
              <div style={{ marginTop: '10' }}>
                <span>{value.Quarter}</span>
              </div>
              <div className='quarter'>
                <div className='block'>
                  <div className='bar' style={{ width: value.Revenue / 20, backgroundColor: '#003f5c' }}></div>
                  <span>{value.Revenue}</span>
                </div>
                <div className='block'>
                  <div className='bar' style={{ width: value.Expense / 20, backgroundColor: '#58508d' }}></div>
                  <span>{value.Expense}</span>
                </div>
                <div className='block'>
                  {value.Revenue - value.Expense < 0 ? <div className='bar' style={{ width: (Math.abs(value.Revenue - value.Expense) / 20), marginLeft: (value.Revenue - value.Expense) / 20, backgroundColor: '#ff6361' }}></div>
                    : <div className='bar' style={{ width: ((value.Revenue - value.Expense) / 50), backgroundColor: '#ffa600' }}></div>
                  }
                  <span>{value.Revenue - value.Expense}</span>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}

export default App;
