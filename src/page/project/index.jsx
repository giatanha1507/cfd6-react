import ProjectItem from "./component/ProjectItem";

export default function Project() {
  return (
    <main className="projectpage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">dự án</h2>
          <p className="top-des">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
            tincidunt elementum sem non luctus
          </p>
          <div className="list row">
            <ProjectItem
              img="img/project/project (1).jpg"
              name="Furnitown"
              madeBy="Hoàn thành với Trần Nghĩa"
            />
            <ProjectItem
              img="img/project/project (2).jpg"
              name="Kymco"
              madeBy="Hoàn thành với Huỳnh Tiến Tài"
            />
            <ProjectItem
              img="img/project/project (3).jpg"
              name="gboxmb"
              madeBy="Hoàn thành với Nguyễn Văn Tuấn"
            />
            <ProjectItem
              img="img/project/project (4).jpg"
              name="Furnitown"
              madeBy="Hoàn thành với Trần Nghĩa"
            />
            <ProjectItem
              img="img/project/project (5).jpg"
              name="Furnitown"
              madeBy="Hoàn thành với Trần Nghĩa"
            />
            <ProjectItem
              img="img/project/project (6).jpg"
              name="Furnitown"
              madeBy="Hoàn thành với Trần Nghĩa"
            />
            <ProjectItem
              img="img/project/project (1).jpg"
              name="Furnitown"
              madeBy="Hoàn thành với Trần Nghĩa"
            />
            <ProjectItem
              img="img/project/project (2).jpg"
              name="Furnitown"
              madeBy="Hoàn thành với Trần Nghĩa"
            />
          </div>
          <div className="bottom">
            <div className="btn overlay round btn-more">tải thêm</div>
          </div>
        </div>
      </section>
    </main>
  );
}
