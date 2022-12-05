import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="210mm"
    height="297mm"
    viewBox="0 0 21000 29700"
    preserveAspectRatio="xMidYMid"
    fillRule="evenodd"
    strokeWidth={28.222}
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    {...props}
  >
    <defs className="ClipPathGroup">
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M0 0h21000v29700H0z" />
      </clipPath>
    </defs>
    <g className="SlideGroup">
      <g className="Slide" clipPath="url(#a)">
        <g className="Page">
          <g className="com.sun.star.drawing.ConnectorShape">
            <path
              className="BoundingBox"
              fill="none"
              d="M6529 8708h7319v8932H6529z"
            />
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth={212}
              strokeLinejoin="bevel"
              strokeLinecap="round"
              d="M6796 9252c363 5910 6343 1960 6744 7786"
            />
            <path
              fill="#FFF"
              d="m6749 9222-47-12-48-21-43-32-35-42-24-45-15-47-8-48 5-47 12-48 21-48 32-42 42-34 46-24 46-17 48-6 47 3 49 14 45 21 44 32 34 39 25 46 15 48 7 47-4 48-12 47-22 48-32 43-41 35-44 24-48 15-46 8-49-5ZM13847 17010l-287 629-331-607 618-22Z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
