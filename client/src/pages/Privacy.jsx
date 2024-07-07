import React from 'react';

export default function TermsConditions() {
  return (
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold lg:text-6xl'>Terms and Conditions:</h1>

      <div className='text-md text-gray-500 flex flex-col gap-6 min-h-screen'>
        <p>
          This site is intended as a portfolio/test project only. Any usage of
          this site is completely voluntary, and no guarantees are made about
          any information or data submitted by the site, to the site or via the
          site to associated databases. Once testing is over I may take the site
          down or move it somewhere else.
        </p>

        <p>
          That said, I do my best to provide trustworthy links and materials,
          and I am experimenting with OAuth and BCrypt to protect user info,
          with a MongoDB. So far, the tests have been positive!
        </p>
      </div>
    </div>
  );
}
