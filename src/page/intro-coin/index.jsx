import IntroInfo from "./component/IntroInfo";

export default function Introduce() {
  return (
    <main class="paypage" id="main">
      <div class="container">
        <section>
          <h2 class="main-title">Giới thiệu Coin</h2>
          <div class="content">
            <IntroInfo />
          </div>
        </section>
      </div>
    </main>
  );
}
