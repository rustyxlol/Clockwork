import React, { useEffect, useState } from 'react';
import './Main.css';

const Main = (props) => {
  return (
    <main>
      <div className="main__container">
        <div className="main__content__one">
          <h1 className="main__title">
            Don't Ask, Don't Tell Repeal Act of 2010
          </h1>
          <p className="main__description">
            The Don't Ask, Don't Tell Repeal Act of 2010 is a landmark United
            States federal statute enacted in December 2010 that established a
            process for ending the "don't ask, don't tell" (DADT) policy, thus
            allowing gay, lesbian, and bisexual people to serve openly in the
            United States Armed Forces. It ended the policy in place since 1993
            that allowed them to serve only if they kept their sexual
            orientation secret and the military did not learn of their sexual
            orientation, which was controversial.
          </p>
        </div>
      </div>
      <div className="sidebar__container">
        <div className="sidebar__content_one">
          <h1 className="sidebar__title">Dongzhi Festival</h1>
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/%E6%B1%A4%E5%9C%86_Cooked_Tang_Yuan_%28329781165%29.jpg/320px-%E6%B1%A4%E5%9C%86_Cooked_Tang_Yuan_%28329781165%29.jpg'
            }
            alt=""
          />
          <p className="sidebar__description">
            The Dongzhi Festival or Winter Solstice Festival is one of the most
            important Chinese festivals celebrated by the Mainland Chinese, Hong
            Kong Chinese, Taiwan, Japanese, Vietnamese, Koreans and other East
            Asian-related people during the Dongzhi solar term, some day between
            December 21 to December 23.
          </p>
        </div>
        <div className="sidebar__content_one">
          <h1 className="sidebar__title">Armed Forces Day (Vietnam)</h1>
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Ilham_Aliyev_attended_the_parade_10.jpg/320px-Ilham_Aliyev_attended_the_parade_10.jpg'
            }
            alt=""
          />
          <p className="sidebar__description">
            Many nations around the world observe some kind of Armed Forces Day
            to honor their military forces. This day is not to be confused with
            Veterans Day or Memorial Day
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
