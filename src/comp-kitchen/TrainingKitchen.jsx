import React from 'react';

const TrainingKitchen = () => {
    return (
      <div className="bg-secondary">
        <div className="text-center">
          <h1>PROJECT: TRAINING KITCHEN</h1>
          <p>
            Willing Hearts not only want to feed but empower their beneficiaries
            further by teaching <br />
            them how to feed themselves
            <img src="./kitchenImages/stove.png" alt="" className="" />
          </p>
        </div>
        <div className="flex flex-wrap">
          <h1 className="">
            WHAT IS IT <br /> ABOUT?
          </h1>
          <div>
            <p>
              Willing Hearts started this initiative to provide culinary
              education and job training <br /> to individuals in need. The
              training kitchen will provide hands-on training in the <br />{" "}
              culinary arts and food service industry, as well as access to job
              placement <br /> assistance. The training kitchen is at the
              Willing Hearts Soup Kitchen in No. 1 <br />
              Lorong J, Telok Kurau, which is easily accessible by public
              transportation and in <br /> close proximity to other community
              resources.
            </p>
            <div className="list-none flex">
              <li>
                <img src="./kitchenImages/smiley.png" alt="" />
                <p>
                  Have more confidence <br /> in their cooking abilities
                </p>
              </li>
              <li>
                <img src="./kitchenImages/clock.png" alt="" />
                <p>
                  See fewer barriers to <br /> making healthy, <br />
                  affordable meals
                </p>
              </li>
              <li>
                <img src="./kitchenImages/dollar.png" alt="" />
                <p>
                  Be able to prepare <br /> healthier, more budget- <br />
                  friendly meals
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TrainingKitchen;