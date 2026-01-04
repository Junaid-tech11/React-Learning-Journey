import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-gray-900">
      
      
      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center px-4 relative z-10">
        
        
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="w-full max-w-md border border-gray-700 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Currency Exchange
            </h1>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              
              <div className="relative w-full h-0.5 my-2">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-gray-800 rounded-full bg-blue-600 text-white p-2 hover:bg-blue-700 hover:scale-110 transition-all duration-200 shadow-lg"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              
              <div className="w-full mt-1 mb-6">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-4 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
        </div>
      </div>


            <div className="hidden md:flex w-1/2 h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black relative justify-center items-center">
                

                
                <div className="text-center px-10">
                    <h2 className="text-4xl font-bold text-white mb-4 opacity-90">Digital Currency</h2>
                    <p className="text-blue-200 text-lg opacity-75">
                        Fast, reliable, and secure exchange rates at your fingertips.
                    </p>
                </div>
                

                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            </div>
            
        </div> 
    );
}

export default App