import React, { useState, useEffect } from 'react';
import Navbar from './navbar';

var input_v = 0.54;
const IntervalExample = () => {
    const [wallet, setwallet] = useState(10000);
    const [btc_value, setmoney] = useState(8925);
    const [btc_wallet, setbtc_wallet] = useState(0);
    const [up_down, setup] = useState(true);
    const up = <i className="fas fa-angle-up text-success"></i>;
    const down = <i className="fas fa-angle-down text-danger"></i>;
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.5) {
                setmoney(btc_value => btc_value - Math.floor(Math.random() * Math.floor(btc_value / 10)));
                setup(up_down => false);
            }
            else {
                setmoney(btc_value => btc_value + Math.floor(Math.random() * Math.floor(btc_value / 10)));
                setup(up_down => true);
            }
        }, 7000);
        return () => clearInterval(interval);
    }, []);
    function input_click(e) {
        input_v = (e.target.value);
    }
    function btn_buy() {
       if(parseInt(wallet)>=(input_v)){
            setwallet(wallet => Math.floor(wallet - input_v));
            setbtc_wallet(btc_wallet => (parseFloat(btc_wallet)+parseFloat(input_v/btc_value)).toFixed(3));
            console.log(btc_wallet)
       }
       else{
           console.log("yetersiz para")
           console.log(wallet)
       }
    }
    function btn_sell() {
        if(parseFloat(btc_wallet)>=(input_v)){
             setwallet(wallet => Math.floor(wallet + input_v*btc_value));
             setbtc_wallet(btc_wallet => (parseFloat(btc_wallet)-parseFloat(input_v)).toFixed(3));
             console.log(btc_wallet)
        }
        else{
            console.log("yetersiz para")
            console.log(wallet)
        }
     }
    return (
        <div>
            <Navbar title='Bitcoin Game' btc_wallet={btc_wallet} wallet={wallet} />
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-4 otopadding">
                            <img className="logo" src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png" />
                        </div>
                        <div className="col-8 pt-5">
                            <h1 style={{ fontSize: 70 }}>Bitcoin</h1>
                            <h1 className="display-3 pt-1" style={{ fontSize: 50 }}>{btc_value} $ &nbsp; {up_down ? up : down}</h1>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center mt-5">
                    <form className="input-group col-md-5">
                        <input type="text" className="form-control inp" placeholder="Değer giriniz..." aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" onChange={input_click} />
                        <div className="input-group-append" id="button-addon4">
                            <button className="btn btn-outline-success" type="button" onClick={btn_buy}>Buy</button>
                            <button className="btn btn-outline-danger" type="button" onClick={btn_sell}>Sell</button>
                        </div>
                    </form>
                </div>
                <br />
                <p style={{ textAlign: "center" }}>Uyarı : Satış yaparkan bitcoin adeti alırken ise dolar değeri giriniz</p>
            </div></div>
    );
};


export default IntervalExample;