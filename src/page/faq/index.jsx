import Accor from "./component/Accor";

export default function Faq() {
  return (
    <main className="faqpage" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">Câu hỏi thường gặp</h2>
          <div className="row">
            <Accor />
          </div>
        </section>
      </div>
    </main>
  );
}
