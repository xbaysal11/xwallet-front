import React, { Component } from "react";
import PT from "prop-types";
import "../Carousel/styles.scss";
import { CardLogo, Logo24, PlusIcon } from "../icons";
import { Link } from "react-router-dom";

export default class CardCarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }
  static propTypes = {
    level: PT.string,
    id: PT.number,
    data: PT.any,
  };
  render() {
    const className = "item level" + this.props.level;
    return (
      <>
        {!this.props.id && !this.props.data ? (
          <div className={className}>
            <Link to="/wallets/create-wallet">
              <div className="wallets-item">
                <div className="wallet">
                  <div className="wallet-inner">
                    <div className="wallet-header">
                      <div className="wallet-label">
                        <Logo24 />
                        <span>xWallet</span>
                      </div>
                      <div className="wallet-logo">
                        <CardLogo />
                      </div>
                    </div>
                    <div className="wallet-body">
                      <div className="plus-container">
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className={className}>
            <div className="wallet">
              <div className="wallet-inner">
                <div className="wallet-header">
                  <div className="wallet-label">
                    <Logo24 />
                    <span>xWallet</span>
                  </div>
                  <div className="wallet-logo">
                    <CardLogo />
                  </div>
                </div>

                <div className="wallet-body">
                  {this.props.id && (
                    <div className="wallet-name">
                      <p className="wallet-name__title">Card name</p>
                      <p className="wallet-name__text">{this.props.id}</p>
                    </div>
                  )}

                  {this.props.data && (
                    <div className="wallet-balance">
                      <p className="wallet-balance__title">Balance</p>
                      <p className="wallet-balance__text">
                        {this.props.data.balance &&
                          this.props.data.balance
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
