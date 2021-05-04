import { Mentor, Top, Member } from "./component";


export default function Team() {
  return (
    <main className="team" id="main">
      <section>
        <div className="container">
          <Top />
          <div className="list row">
            <Mentor
              img="/img/nghia.jpg"
              name="Tran Nghia"
              title="Founder &amp; Fullstack Developer"
            />
            <Mentor
              img="/img/vuong.jpg"
              name="Vuong Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Mentor
              img="/img/huy.jpg"
              name="Huy Nguyen"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Mentor
              img="/img/quan.jpg"
              name="Quan Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Member 
              img="/img/quan.jpg"
              name="Quan Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Member 
              img="/img/quan.jpg"
              name="Quan Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Member 
              img="/img/quan.jpg"
              name="Quan Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Member 
              img="/img/quan.jpg"
              name="Quan Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Member 
              img="/img/quan.jpg"
              name="Quan Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Member 
              img="/img/quan.jpg"
              name="Quan Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
            <Member 
              img="/img/quan.jpg"
              name="Quan Dang"
              title="Co-Founder &amp; Fullstack Developer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
