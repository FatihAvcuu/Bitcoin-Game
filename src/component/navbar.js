import React from 'react'

const Navbar = props => {
    return (
        <nav className="navbar navbar-danger bg-danger text-white">
            <h3 className="pdn">{props.title}</h3>
            <form className="form-inline">
    <p className="align-v"><i className="fab fa-bitcoin"></i> {props.btc_wallet}</p>
                <p className="align-v"><i className="fas fa-wallet"></i> {props.wallet} $</p>
            </form>
        </nav>
    )
}

export default Navbar;