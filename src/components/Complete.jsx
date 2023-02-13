import React from 'react';
import { complete } from '../assets';
import { Button } from '../components';

export default function Complete() {
  return (
    <div className="mt-32 flex flex-col items-center gap-8 mx-auto w-full pb-16">
      <img src={complete} alt="complete, checkmark" />
      <div className="flex flex-col items-center gap-3">
        <h2 className="uppercase text-very-dark-violet text-3xl tracking-wider">
          thank you!
        </h2>
        <p className="text-light-violet text-[18px]">
          We've added your card details
        </p>
      </div>
      <Button className="max-w-sm">Continue</Button>
    </div>
  );
}
