import React from "react";
import { CgComponents } from 'react-icons/cg'
import { SiRedux } from 'react-icons/si'

const Stat = () => {
  return (
    <div className="stats shadow flex flex-col md:flex-row bg-orange-100 text-primary">
      <div className="stat ">
        <div className="stat-figure text-primary text-4xl">
          <CgComponents/>
        </div>
        <div className="stat-title">Total Components</div>
        <div className="stat-value text-primary">+ 10</div>
        <div className="stat-desc">Organized by Atomic design</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-orange900 text-4xl">
          <SiRedux/>
        </div>
        <div className="stat-title">Data Api</div>
        <div className="stat-value text-orange900">&gt; 500</div>
        <div className="stat-desc">App structured by redux pattern</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-orange900">
          <div className="avatar online">
            <a href="https://github.com/sarisp3260" className="w-16 h-16 rounded-full outline-dotted outline-4">
              <img src="https://avatars.githubusercontent.com/u/75185314?s=400&u=40f0f281aa9fe99dc0efccd9786d8315a456a5d1&v=4" />
            </a>
          </div>
        </div>
        <div className="stat-value">100%</div>
        <div className="stat-title">Challenge complete</div>
        <div className="stat-desc text-orange900">0 remaining, what's next?</div>
      </div>
    </div>
  );
};

export default Stat;
