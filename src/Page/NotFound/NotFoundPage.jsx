import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}

  return (
    <div id="page-404">
      <div className="content">
        <div className="title-on-desktop">
          <svg style={{ width: 600, height: 200 }} alignmentBaseline="middle">
            <defs>
              <clipPath id="clip2">
                <path d="M 0 0 L 600 0 L 600 80 L 0 80 L 0 0 L 0 125 L 600 125 L 600 200 L 0 200 Z" />
              </clipPath>
            </defs>
            <text
              x={300}
              y={190}
              style={{ width: 600, height: 200 }}
              textAnchor="middle"
              fontFamily="Lato"
              fontWeight={700}
              fontSize={250}
              fill="#505458"
              clipPath="url(#clip2)"
            >
              4<tspan fill="#35b8e0">0</tspan>4
            </text>
          </svg>
          <div className="title">هذه الصفحة غير موجودة</div>
        </div>
        <h1 className="title-on-mobile">هذه الصفحة غير موجودة</h1>
        <p className="h2">
        يبدو أنك ربما تكون قد اتخذت منحى خاطئًا. لا تقلق ... هذا يحدث لأفضل منا. إليك نصيحة صغيرة قد تساعدك على العودة إلى المسار الصحيح.
        </p>
        <button onClick={goBack} className="btn btn-secondary">
          <b className="h1">الرجوع للخلف</b>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
