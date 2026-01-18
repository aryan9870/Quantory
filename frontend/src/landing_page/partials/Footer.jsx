import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid px-5 pt-5 shadow-sm mt-5 text-muted bg-light">
      <div className="row ms-5">
        <div className="col">
          <h1 className="mb-3 fw-semibold" style={{ fontSize: "1.5rem" }}>
            <a class="navbar-brand text-primary fw-semibold fs-5" href="#">
              <i class="fa-brands fa-quinscape"></i> QUANTORY
            </a>
          </h1>
          <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          <div className="fs-5 d-flex gap-3">
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-square-linkedin"></i>
          </div>
          <hr />
          <div className="fs-5 d-flex gap-3">
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="col">
          <h1 className="fw-semibild mb-3" style={{ fontSize: "1.2rem" }}>
            Account
          </h1>
          <ul className="list-unstyled">
            <li className="mb-3">Open demat account</li>
            <li className="mb-3">Minor demat account</li>
            <li className="mb-3">NRI demat account</li>
            <li className="mb-3">Commodity</li>
            <li className="mb-3">Dematerialisation</li>
            <li className="mb-3">Fund transfer</li>
            <li className="mb-3">MTF</li>
            <li className="mb-3">Referral program</li>
          </ul>
        </div>
        <div className="col">
          <h1 className="fw-semibild mb-3" style={{ fontSize: "1.2rem" }}>
            Support
          </h1>
          <ul className="list-unstyled">
            <li className="mb-3">Contact us</li>
            <li className="mb-3">Support portal</li>
            <li className="mb-3">How to file a complaint?</li>
            <li className="mb-3">Status of your complaints</li>
            <li className="mb-3">Bulletin</li>
            <li className="mb-3">Circular</li>
            <li className="mb-3">Z-Connect blog</li>
            <li className="mb-3">Downloads</li>
          </ul>
        </div>
        <div className="col">
          <h1 className="fw-semibild mb-3" style={{ fontSize: "1.2rem" }}>
            Company
          </h1>
          <ul className="list-unstyled">
            <li className="mb-3">About</li>
            <li className="mb-3">Philosophy</li>
            <li className="mb-3">Press & media</li>
            <li className="mb-3">Careers</li>
            <li className="mb-3">Zerodha Cares / CSR</li>
            <li className="mb-3">Zerodha.tech</li>
            <li className="mb-3">Open source</li>
          </ul>
        </div>
      </div>
      <div className="row ms-5 mt-5" style={{fontSize: "0.6rem"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
      </div>
      <div className="row py-3">
        <div className="col d-flex justify-content-center flex-wrap gap-3">
        <span>NSE</span><span>BSE</span><span>MCX</span><span>Terms & Conditions</span><span>Policies & procedures</span><span>Privacy policy</span><span>Disclosure</span><span>For investor's attention</span><span>Investor charter</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
