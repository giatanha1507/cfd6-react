import React from "react";
import Condition from "./Condition";

export default function ConditionWrap({ benifits, required }) {
  return (
    <>
      <h3 className="title">yêu cầu cần có</h3>
      <div className="row row-check">
        {required?.map((value, i) => (
          <Condition {...value} key={i} />
        ))}
      </div>
      <h3 className="title">hình thức học</h3>
      <div className="row row-check">
        {benifits?.map((value, i) => (
          <Condition {...value} key={i} />
        ))}
      </div>
    </>
  );
}
