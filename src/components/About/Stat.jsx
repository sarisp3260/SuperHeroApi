import React from "react";
import { CgComponents } from 'react-icons/cg'
import { SiRedux } from 'react-icons/si'

const Stat = () => {
  return (
    <div class="stats shadow flex flex-col md:flex-row bg-orange-100 text-primary">
      <div class="stat ">
        <div class="stat-figure text-primary text-4xl">
          <CgComponents/>
        </div>
        <div class="stat-title">Total Components</div>
        <div class="stat-value text-primary">+ 10</div>
        <div class="stat-desc">Organized by Atomic design</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-orange900 text-4xl">
          <SiRedux/>
        </div>
        <div class="stat-title">Data Api</div>
        <div class="stat-value text-orange900">&gt; 500</div>
        <div class="stat-desc">App structured by redux pattern</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-orange900">
          <div class="avatar online">
            <a href="https://github.com/sarisp3260" class="w-16 h-16 rounded-full outline-dotted outline-4">
              <img src="https://avatars.githubusercontent.com/u/75185314?s=400&u=40f0f281aa9fe99dc0efccd9786d8315a456a5d1&v=4" />
            </a>
          </div>
        </div>
        <div class="stat-value">100%</div>
        <div class="stat-title">Challenge complete</div>
        <div class="stat-desc text-orange900">0 remaining, what's next?</div>
      </div>
    </div>
  );
};

export default Stat;
