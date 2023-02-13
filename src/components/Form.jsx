import React from 'react';
import { Labels, Inputs, Span, Button } from '../components';

export default function Form(props) {
  const { cardDetails, validation, empty, onFormSubmit, onChange } = props;

  return (
    <form
      onSubmit={onFormSubmit}
      className="px-4 text-[18px] mt-32 pb-16 lg:mt-0 lg:pb-0 max-w-lg mx-auto w-full"
    >
      <ul className="flex flex-col items-start justify-center gap-5">
        <li className="w-full">
          <Labels title="cardholders name" htmlFor="name">
            <Inputs
              id="name"
              placeholder="e.g. Jane Appleseed"
              name="name"
              value={cardDetails.name}
              onChange={onChange}
              empty={empty}
              className={`${
                cardDetails.name.length > 0 && 'valid:border-light-violet'
              }`}
            />
            <Span>{validation.validName}</Span>
          </Labels>
        </li>
        <li className="w-full">
          <Labels title="card number" htmlFor="number">
            <Inputs
              id="number"
              placeholder="e.g. 1234 5678 9123 0000"
              name="number"
              value={cardDetails.number}
              onChange={onChange}
              maxLength={19}
              empty={empty}
              className={`${
                cardDetails.number.length > 0 && 'valid:border-light-violet'
              }`}
            />
            <Span>{validation.validNumber}</Span>
          </Labels>
        </li>
        <li className="w-full flex gap-4">
          <Labels title="exp. date (mm/yy)" htmlFor="date" className="flex-1">
            <div className="flex  gap-2">
              <Inputs
                id="date"
                placeholder="MM"
                name="month"
                value={cardDetails.month}
                onChange={onChange}
                inputMode="numeric"
                maxLength={2}
                minLength={2}
                empty={empty}
                className={`${
                  cardDetails.month.length > 0 && 'valid:border-light-violet'
                } max-w-[80px]`}
              />
              <Inputs
                id="date"
                placeholder="YY"
                name="year"
                value={cardDetails.year}
                onChange={onChange}
                inputMode="numeric"
                maxLength={2}
                minLength={2}
                empty={empty}
                className={`${
                  cardDetails.year.length > 0 && 'valid:border-light-violet'
                } max-w-[80px]`}
              />
            </div>
            <Span>{validation.validExp}</Span>
          </Labels>
          <Labels title="cvc" htmlFor="cvc" className="flex-1">
            <Inputs
              id="cvc"
              placeholder="e.g. 123"
              name="cvc"
              value={cardDetails.cvc}
              onChange={onChange}
              inputMode="numeric"
              maxLength={3}
              minLength={3}
              empty={empty}
              className={`${
                cardDetails.cvc.length > 0 && 'valid:border-light-violet'
              } w-full`}
            />
            <Span>{validation.validCvc}</Span>
          </Labels>
        </li>
      </ul>
      <Button>Confirm</Button>
    </form>
  );
}
