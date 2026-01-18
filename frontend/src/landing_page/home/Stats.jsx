import React from "react";

const Stats = () => {
  return (
    <div className="container p-5 text-muted">
      <div className="row">
        <div className="col-6 pe-5">
          <h1 className="mb-5" style={{ fontSize: "1.5rem" }}>Trust with confidence</h1>
          <div className="">
            <div className="mb-4">
              <h2 style={{ fontSize: "1.3rem" }}>Customer-first always</h2>
              <p style={{ fontSize: "1.1rem" }}>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments.
              </p>
            </div>
            <div className="mb-4">
              <h2 style={{ fontSize: "1.3rem" }}>No spam or gimmicks</h2>
              <p style={{ fontSize: "1.1rem" }}>
                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
              </p>
            </div>
            <div className="mb-4">
              <h2 style={{ fontSize: "1.3rem" }}>The Zerodha universe</h2>
              <p style={{ fontSize: "1.1rem" }}>
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
              </p>
            </div>
            <div className="mb-4">
              <h2 style={{ fontSize: "1.3rem" }}>Do better with money</h2>
              <p style={{ fontSize: "1.1rem" }}>
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img className="" src="media/images/ecosystem.png" alt="" style={{width: "100%"}}/>
          <div className="d-flex justify-content-center gap-5 mt-4">
            <a className="text-decoration-none" href="">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            <a className="text-decoration-none" href="">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
