import PayInfo from "./component/PayInfo";

export default function Payment() {
  return (
    <main className="paypage" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">thanh toán</h2>
          <div className="content">
            <PayInfo />
          </div>
        </section>
      </div>
    </main>
  );
}
